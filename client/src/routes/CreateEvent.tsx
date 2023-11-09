import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { Button, Form, FormError, Input } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Event } from '../types';

type NewEvent = Omit<Event, 'id'>;

const defaultValues: NewEvent = {
  name: '',
  date: '',
  description: '',
  tickets: [],
};

const CreateEvent: FC = () => {
  const [values, setValues] = useState<NewEvent>(defaultValues);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setIsCreating(true);

    try {
      const { data: event } = await axios.post(
        'http://localhost:5000/events',
        values
      );

      setValues(defaultValues);

      // If failed on the previous run, remove the error
      if (isError) {
        setIsError(false);
      }

      navigate(`/events/${event.id}`);
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
        name="date"
        placeholder="Date"
        onChange={handleChange}
        value={values.date}
      />
      <Input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={values.description}
      />
      <Button>{isCreating ? 'Creating Event...' : 'Create Event'}</Button>
      {isError && <FormError>There was an error creating the event</FormError>}
    </Form>
  );
};

export default CreateEvent;
