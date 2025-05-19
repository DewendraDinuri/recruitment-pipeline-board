# recruitment-pipeline-board
A Kanban-style recruitment pipeline built with React and Node.js for managing candidate applications through different hiring stages.



This project is a full-stack recruitment management tool that visualizes candidate progress through a hiring pipeline using a Kanban-style interface. The frontend is built with React (without Tailwind), and the backend is powered by Node.js with Express. It allows users to create, read, update, and delete candidate data, filter by stage, and interact with candidate cards — all using mock data or a real database. Recruitment Pipeline Board   This is a full-stack recruitment pipeline board that visualizes and manages candidates through different hiring stages using a Kanban layout.
🔧 Tech Stack  
    * Frontend: React, CSS Modules / Styled-Components (No Tailwind)
    * Backend: Node.js, Express
    * Data: In-memory JSON or MongoDB
✨ Features  
    * Kanban layout: Applying Period, Screening, Interview, Test
    * View candidate details
    * Move candidates between stages
    * RESTful API with CRUD operations
    * Filter candidates by stage
    
# Recruitment Pipeline Board

This is a full-stack recruitment board web application, divided into two parts:

- **client/**: Frontend built with React
- **server/**: Backend built with Node.js + Express

## Prerequisites

- Node.js >= 14
- npm >= 6

##  Installation & Setup

### 1. Clone the project

```
git clone 
cd recruitment-pipeline-board
```

### 2. Install Server Dependencies

```
cd server
npm install
```

Then start the server:

```
npm start
```

The server runs at `http://localhost:5001`

### 3. Install Client Dependencies

```
cd ../client
npm install
```

Install required UI packages:

```
npm install react-icons
npm install @fortawesome/fontawesome-free
```

Then run the client:

```
npm start
```

The client runs at `http://localhost:3000`

## Folder Structure

```
recruitment-pipeline-board/
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── server/
│   ├── index.js
│   └── package.json
└── README.md
```

## Notes

- Do not forget to run **both** client and server before testing
- Assets like avatars are stored under `client/src/assets`
