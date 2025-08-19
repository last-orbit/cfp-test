# CFP Test Project

## Overview
This project is a full-stack task management app with a React front-end and a Node/Express back-end. Tasks can be added, updated, deleted, and moved between "To-Do", "Pending", and "Finished" columns.

---

## Project Structure

cfp-test/

├── client/ # Frontend (React + Vite + TypeScript)

└── server/ # Backend (Node + Express + TypeScript)


---

## Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd cfp-test
```
### 2. Install dependencies
```bash

npm install
cd client
npm install
cd ../server
npm install
```
### 3. Running the project
Start both frontend and backend simultaneously in the root folder:

```bash
npm run start
```
* Frontend runs on http://localhost:5173 (Vite)

* Backend runs on http://localhost:3000

Alternatively, you can start them individually:

```bash

# Frontend
npm run start:client

# Backend
npm run start:server
```
___
### Frontend (client)
* Built with React, TypeScript, and Vite.

* Uses react-bootstrap for UI components.

* Task management logic is in TaskList and TaskItem components.

* Supports adding, editing, and deleting tasks.

* Tasks are categorized into columns: To-Do, Pending, Finished.

### Commands
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview build
npm run lint    # Run ESLint
```
___
### Backend (server)
* Built with Node.js, Express, and TypeScript.

* Simple REST API for tasks.

* Uses cors for cross-origin requests.

### Commands
```bash

npm run dev   # Start dev server with nodemon
npm run build # Compile TypeScript
npm start     # Start production server
```
___
### Dependencies
#### Frontend

* react, react-dom

* react-bootstrap

* axios

* tailwindcss

* lucide-react

#### Backend

* express

* cors

* nodemon (dev)

* ts-node (dev)

* typescript (dev)
---
### License
This project is private.
