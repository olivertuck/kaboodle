import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';

type Availability = 'AVAILABLE' | 'SOLD_OUT';

type Ticket = {
  id: string;
  name: string;
  type: string;
  price: number;
  bookingFee: number;
  availability: Availability;
};

type Event = {
  id: string;
  name: string;
  date: string;
  description: string;
  tickets: Ticket[];
};

const events: Event[] = [];
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/events', (req, res) => {
  const event = {
    id: uuidv4(),
    ...req.body,
  };

  events.push(event);
  res.json(event);
});

app.get('/events/:id', (req, res) => {
  const event = events.find((event) => event.id === req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.sendStatus(404);
  }
});

app.patch('/events/:id', (req, res) => {
  const eventIndex = events.findIndex((event) => event.id === req.params.id);

  if (eventIndex === -1) {
    res.sendStatus(404);
  } else {
    const newEvent = {
      ...req.body,
      tickets: req.body.tickets.map((ticket: Ticket) => {
        const newTicket = {
          ...ticket,
        };

        // If it's a new ticket, we need to generate a UUID on the server
        newTicket.id = newTicket.id || uuidv4();

        return newTicket;
      }),
    };

    events[eventIndex] = newEvent;

    res.json(newEvent);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
