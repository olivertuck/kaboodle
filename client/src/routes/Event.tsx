import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from '../types';
import { Button, CreateTicketForm, List, TicketListItem } from '../components';

const Event: FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/events/${id}`).then(({ data }) => {
        setEvent(data);
      });
    }
  }, [id]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="space-y-2 mb-4">
        <h1 className="text-xl">{event.name}</h1>
        <p>{`Date: ${event.date}`}</p>
        <p>{`Description: ${event.description}`}</p>
        {event.tickets.length ? (
          <List>
            {event.tickets.map((ticket) => (
              <TicketListItem key={ticket.id} ticket={ticket} />
            ))}
          </List>
        ) : (
          <p>No Tickets Available</p>
        )}
      </div>
      <CreateTicketForm event={event} setEvent={setEvent} />
    </>
  );
};

export default Event;
