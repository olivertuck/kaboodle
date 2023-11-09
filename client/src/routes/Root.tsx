import { FC } from 'react';
import { Navigation, NavigationLink } from '../components';
import { Outlet } from 'react-router-dom';

const Root: FC = () => (
  <>
    <header>
      <Navigation>
        <NavigationLink to="/">Create Event</NavigationLink>
        <NavigationLink to="/events">View Events</NavigationLink>
      </Navigation>
    </header>
    <main className="p-4">
      <Outlet />
    </main>
  </>
);

export default Root;
