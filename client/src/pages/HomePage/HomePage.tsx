import  { useEffect, useState } from 'react';
// import api from '../../lib/utils'; // the axios instance
import TaskList from '../../components/TaskList';
import ErrorBoundary from '../../components/ErrorBoundary';

interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'to-do' | 'pending' | 'finished';
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

useEffect(() => {
  fetch('http://localhost:3000/tasks')
    .then((response) => response.json())
    .then((data) => {
      setTasks(data);
    })
    .catch((err) => console.error('Error fetching tasks:', err));
}, []);

// Handler Functions
const handleAddTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  //Filter tasks based off status
   const toDoTasks = tasks.filter((t) => t.status === 'to-do');
   const pendingTasks = tasks.filter((t) => t.status === 'pending');
   const finishedTasks = tasks.filter((t) => t.status === 'finished');

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        padding: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#374151',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ color: '#f9fafb', marginBottom: '18px' }}>Home Page</h1>
      <ErrorBoundary>
        <div style={{ display: 'flex', gap: '16px' }}>
          <TaskList
            title='To-Do'
            tasks={toDoTasks}
            onAdd={handleAddTask}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
          <TaskList
            title='Pending'
            tasks={pendingTasks}
            onAdd={handleAddTask}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
          <TaskList
            title='Finished'
            tasks={finishedTasks}
            onAdd={handleAddTask}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
