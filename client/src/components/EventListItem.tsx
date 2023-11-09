import { FC } from 'react';
import { Event } from '../types';
import { Link } from 'react-router-dom';

type EventListItemProps = {
  event: Event;
};

const EventListItem: FC<EventListItemProps> = ({ event }) => (
  <li className="border rounded p-4">
    <Link className="space-y-2" to={event.id}>
      <h2 className="font-medium text-xl">{event.name}</h2>
      <p>{`Date: ${event.date}`}</p>
      <p>{`Description: ${event.description}`}</p>
      <p>{`${event.tickets.length} Tickets Available`}</p>
    </Link>
  </li>
);

export default EventListItem;
