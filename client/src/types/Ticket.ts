import Availability from './Availability';

type Ticket = {
  id: string;
  name: string;
  type: string;
  price: number;
  bookingFee: number;
  availability: Availability;
};

export default Ticket;
