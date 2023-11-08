import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.get('/events', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'test',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
