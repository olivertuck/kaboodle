import { FC, ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
};

const List: FC<ListProps> = ({ children }) => (
  <ul className="grid grid-cols-4 gap-4">{children}</ul>
);

export default List;
