import { FC, ReactNode } from 'react';

type EventListProps = {
  children: ReactNode;
};

const EventList: FC<EventListProps> = ({ children }) => (
  <ul className="grid grid-cols-4 gap-4">{children}</ul>
);

export default EventList;
