import type { Request, Response, NextFunction } from 'express';
import type { Task } from '../models/tasks.ts';
import { items } from '../models/tasks.ts';

// Create a new task
export const createTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, status } = req.body;
    const newTask: Task = {
      id: items.length + 1,
      title,
      description,
      status,
    };
    items.push(newTask);
    console.log(`Created task: ${JSON.stringify(newTask)}`);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// Get all tasks
export const getAllTasks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(`Retrieved all tasks. Total: ${items.length}`);
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

// Get task by id
export const getTaskById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const task = items.find((task) => task.id === Number(id));
    if (!task) {
      console.log(`Task with id ${id} not found`);
      return res.status(404).json({ error: 'Task not found' });
    }
    console.log(`Retrieved task: ${JSON.stringify(task)}`);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// Update a task
export const updateTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = items.find((task) => task.id === Number(id));
    if (!task) {
      console.log(`Task with id ${id} not found for update`);
      return res.status(404).json({ error: 'Task not found' });
    }

    task.title = title;
    task.description = description;
    task.status = status;
    console.log(`Updated task: ${JSON.stringify(task)}`);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// Delete a task
export const deleteTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = items.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = items.splice(index, 1)[0]; // removes the task from the array

  return res.json({ message: 'Task deleted', task: deletedTask });
};