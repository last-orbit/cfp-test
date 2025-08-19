import express from 'express';
import tasksRoutes from './routes/tasksRoutes.ts';
import { errorhandler } from './middlewares/errorHandler.ts';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
// Root route
app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// Tasks routes
app.use('/api', tasksRoutes);

// Global error handler
app.use(errorhandler);

export default app;
