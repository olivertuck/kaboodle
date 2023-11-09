import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { Button, Input } from '../components';
import axios from 'axios';

const defaultValues = {
  name: '',
  date: '',
  description: '',
  tickets: [],
};

const CreateEvent: FC = () => {
  const [values, setValues] = useState(defaultValues);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);

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
      await axios.post('http://localhost:5000/events', values);

      setValues(defaultValues);

      if (isError) {
        setIsError(false);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
      <Button>{isCreating ? 'Creating...' : 'Create Event'}</Button>
      {isError && (
        <p className="text-red-600">There was an error creating the event</p>
      )}
    </form>
  );
};

export default CreateEvent;
