import express from 'express';
import tasksRoutes from './routes/tasksRoutes.ts';
import { errorhandler } from './middlewares/errorHandler.ts';

const app = express();
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// Tasks routes
app.use('/tasks', tasksRoutes);

// Global error handler
app.use(errorhandler);

export default app;
