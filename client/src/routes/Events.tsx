import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { EventList, EventListItem } from '../components';
import { Event } from '../types';

const Events: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/events').then(({ data }) => {
      setEvents(data);
    });
  }, []);

  return (
    <EventList>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </EventList>
  );
};

export default Events;
