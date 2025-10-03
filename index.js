import express from 'express';
import formRoutes from './route/user.route.js';

const app = express();
const PORT = 4000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/form', formRoutes); 

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
