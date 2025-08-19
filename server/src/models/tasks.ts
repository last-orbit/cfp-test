enum TaskStatus{
  ToDo = 'to-do',
  Pending = 'pending',
  Finished = 'Finished'
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export let items: Task[] = [];
