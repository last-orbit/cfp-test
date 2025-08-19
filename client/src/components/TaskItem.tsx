import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'to-do' | 'pending' | 'finished';
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description || ''
  );
  const [editStatus, setEditStatus] = useState<Task['status']>(task.status);
  const handleSave = () => {
    onUpdate({
      ...task,
      title: editTitle,
      description: editDescription,
      status: editStatus,
    });
    setShowEdit(false);
  };

  if (!task) return null;

  return (
    <>
      <Card
        style={{
          backgroundColor: '#374151',
          color: '#f9fafb',
          marginBottom: '12px',
          borderRadius: '8px',
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontWeight: 600, fontSize: '18px' }}>
            {task.title}
          </Card.Title>
          <Card.Text style={{ color: '#d1d5db' }}>{task.description}</Card.Text>
          <div className='d-flex justify-content-between'>
            <span className='badge bg-info text-dark'>{task.status}</span>
            <div>
              <Button
                style={{
                  backgroundColor: '#facc15',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  color: '#000',
                }}
                onClick={() => setShowEdit(true)}
              >
                ✏️
              </Button>{' '}
              <Button
                style={{
                  backgroundColor: '#ef4444',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  color: '#fff',
                }}
                onClick={() => onDelete(task.id)}
              >
                💣
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        style={{
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: '600', fontSize: '1.25rem' }}>
            Edit Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Label style={{ fontWeight: '500' }}>Title</Form.Label>
              <Form.Control
                type='text'
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  padding: '5px',
                  marginLeft: '10px',
                }}
              />
            </Form.Group>
            <Form.Group
              style={{
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Form.Label style={{ fontWeight: '500' }}>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                style={{
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  padding: '10px',
                  marginLeft: '10px',
                }}
              />
            </Form.Group>
            <Form.Group
              style={{
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Form.Label style={{ fontWeight: '500', marginRight: '10px' }}>
                Status
              </Form.Label>
              <Form.Select
                value={editStatus}
                onChange={(e) =>
                  setEditStatus(e.target.value as Task['status'])
                }
              >
                <option value='to-do'>To-Do</option>
                <option value='pending'>Pending</option>
                <option value='finished'>Finished</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: '#f3f4f6', borderTop: '1px solid #e5e7eb' }}
        >
          <Button
            variant='secondary'
            onClick={() => setShowEdit(false)}
            style={{ borderRadius: '6px', padding: '8px 14px' }}
          >
            Cancel
          </Button>
          <Button
            variant='primary'
            onClick={handleSave}
            style={{
              borderRadius: '6px',
              padding: '8px 14px',
              backgroundColor: '#3b82f6',
              border: 'none',
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;
