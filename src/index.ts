
import express from 'express';
import 'dotenv/config';
import routes from './routes';
import { setupSwagger } from './swagger';

const app = express();

app.use(express.json());

setupSwagger(app);

app.use('', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});