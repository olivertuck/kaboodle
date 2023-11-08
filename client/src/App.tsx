import axios from 'axios';
import { FC, useEffect } from 'react';

const App: FC = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/events').then(({ data }) => {
      console.log('DATA: ', data);
    });
  }, []);

  return <main className="p-4">Kaboodle</main>;
};

export default App;
