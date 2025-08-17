export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export let items: Task[] = [];
