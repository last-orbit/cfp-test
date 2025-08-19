import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Button, Modal, Form, Toast, ToastContainer } from 'react-bootstrap';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'to-do' | 'pending' | 'finished';
}

interface TaskListProps {
  title: string;
  tasks: Task[];
  onAdd: (task: Task) => void;
  onUpdate: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  title,
  tasks,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTask = () => {
    if (newTitle.trim() !== '') {
      const taskId = Date.now();
      onAdd({
        id: taskId,
        title: newTitle,
        description: newDescription,
        status: title.toLowerCase() as 'to-do' | 'pending' | 'finished',
      });
      setNewTitle('');
      setNewDescription('');
      setShow(false);
      setToastMessage('Task added 🎉');
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#1f2937',
        color: '#f9fafb',
        padding: '16px',
        borderRadius: '8px',
        width: '300px',
        margin: '0 12px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
        animation={true}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: '#f3f4f6',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <Modal.Title style={{ fontWeight: '600', fontSize: '1.25rem' }}>
            Add New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#f9fafb' }}>
          <Form
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Form.Group>
              <Form.Label style={{ fontWeight: '500', marginRight: '10px' }}>
                Title
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter title'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  padding: '10px',
                }}
              />
            </Form.Group>
            <Form.Group
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                display: 'flex',
              }}
            >
              <Form.Label
                style={{
                  fontWeight: '500', marginLeft: '10px',


                }}
              >
                Description
              </Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter description'
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                style={{
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  padding: '5px',
                  marginLeft: '10px',
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer
          style={{ backgroundColor: '#f3f4f6', borderTop: '1px solid #e5e7eb' }}
        >
          <Button
            variant='secondary'
            onClick={handleClose}
            style={{ borderRadius: '6px', padding: '8px 14px' }}
          >
            Close
          </Button>
          <Button
            variant='primary'
            onClick={handleAddTask}
            style={{
              borderRadius: '6px',
              padding: '8px 14px',
              backgroundColor: '#3b82f6',
              border: 'none',
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <h2
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '12px',
          textAlign: 'center',
          color: '#bfdbfe', // light blue
        }}
      >
        {title}
      </h2>
      <Button
        style={{
          backgroundColor: '#3b82f6',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          color: '#fff',
          marginBottom: '12px',
        }}
        onClick={handleShow}
      >
        Add Task
      </Button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>

      <ToastContainer position='bottom-end' className='p-3'>
        <Toast
          onClose={() => setToastMessage(null)}
          show={!!toastMessage}
          delay={2000}
          autohide
          bg='dark'
        >
          <Toast.Body className='text-white'>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default TaskList;
