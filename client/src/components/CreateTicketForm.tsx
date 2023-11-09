import {
  ChangeEventHandler,
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { Availability, Event } from '../types';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import Form from './Form';
import FormError from './FormError';
import Select from './Select';

type NewTicket = {
  name: string;
  type: string;
  price: string;
  bookingFee: string;
  availability: Availability;
};

const defaultValues: NewTicket = {
  name: '',
  type: '',
  price: '',
  bookingFee: '',
  availability: 'AVAILABLE',
};

type CreateTicketFormProps = {
  event: Event;
  setEvent: Dispatch<SetStateAction<Event>>;
};

const CreateTicketForm: FC<CreateTicketFormProps> = ({ event, setEvent }) => {
  const [values, setValues] = useState<NewTicket>(defaultValues);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const { data: newEvent } = await axios.patch(
        `http://localhost:5000/events/${event.id}`,
        {
          ...event,
          tickets: [
            ...event.tickets,
            {
              ...values,
              price: parseInt(values.price),
              bookingFee: parseInt(values.bookingFee),
            },
          ],
        }
      );

      setValues(defaultValues);

      // If failed on the previous run, remove the error
      if (isError) {
        setIsError(false);
      }

      setEvent(newEvent);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={values.name}
      />
      <Input
        name="type"
        placeholder="Type"
        onChange={handleChange}
        value={values.type}
      />
      <Input
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={values.price}
        type="number"
      />
      <Input
        name="bookingFee"
        placeholder="Booking Fee"
        onChange={handleChange}
        value={values.bookingFee}
        type="number"
      />
      <Select
        name="availability"
        value={values.availability}
        onChange={handleChange}
        options={[
          {
            label: 'Available',
            value: 'AVAILABLE',
          },
          {
            label: 'Sold Out',
            value: 'SOLD_OUT',
          },
        ]}
      />
      <Button>{isCreating ? 'Creating Ticket...' : 'Create Ticket'}</Button>
      {isError && <FormError>There was an error creating the ticket</FormError>}
    </Form>
  );
};

export default CreateTicketForm;
