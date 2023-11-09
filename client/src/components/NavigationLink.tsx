import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type NavigationLinkProps = {
  to: string;
  children: string;
};

const NavigationLink: FC<NavigationLinkProps> = ({ to, children }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        classNames('text-sm font-medium p-2.5', {
          'rounded-full bg-primary-600 text-white': isActive,
        })
      }
      to={to}
    >
      {children}
    </NavLink>
  </li>
);

export default NavigationLink;
