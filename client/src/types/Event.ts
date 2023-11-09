import Ticket from './Ticket';

type Event = {
  id: string;
  name: string;
  date: string;
  description: string;
  tickets: Ticket[];
};

export default Event;
