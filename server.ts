import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes/computerRoutes';

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(bodyParser.json());
app.use('/api/computers', routes); 

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://192.168.1.139:${PORT}`);
});