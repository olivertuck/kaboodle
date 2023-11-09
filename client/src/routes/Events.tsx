import axios from 'axios';
import { FC, useEffect } from 'react';

const Events: FC = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/events').then(({ data }) => {
      console.log('DATA: ', data);
    });
  }, []);

  return (
    <ul>
      <li>Event</li>
    </ul>
  );
};

export default Events;
