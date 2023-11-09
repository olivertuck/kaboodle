import { FC, ReactNode } from 'react';

type NavigationProps = {
  children: ReactNode;
};

const Navigation: FC<NavigationProps> = ({ children }) => (
  <nav className="p-4">
    <ul className="flex gap-4">{children}</ul>
  </nav>
);

export default Navigation;
