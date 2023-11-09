import { FC } from 'react';
import { Ticket } from '../types';
import { Link } from 'react-router-dom';

type TicketListItemProps = {
  ticket: Ticket;
};

const TicketListItem: FC<TicketListItemProps> = ({ ticket }) => (
  <li className="space-y-2 border rounded p-4">
    <h2 className="font-medium text-xl">{ticket.name}</h2>
    <p>{`Type: ${ticket.type}`}</p>
    <p>{`Price: ${ticket.price}`}</p>
    <p>{`Booking Fee: ${ticket.bookingFee}`}</p>
    <p>{`Availability: ${ticket.availability}`}</p>
  </li>
);

export default TicketListItem;
