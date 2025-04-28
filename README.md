# Real-Time Chat Application

A real-time chat application built with React, Node.js, and Socket.IO.

## Features

- Real-time messaging
- Room-based chat
- User identification
- Message timestamps
- Responsive design

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express
- Real-time Communication: Socket.IO
- Styling: CSS

## Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
├── server/                 # Node.js backend
│   ├── index.js
│   └── package.json
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-name>
```

2. Install dependencies for both client and server:

For the client:

```bash
cd client
npm install
```

For the server:

```bash
cd server
npm install
```

## Running the Application

1. Start the server:

```bash
cd server
npm start
```

2. Start the client:

```bash
cd client
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Usage

1. Enter your username and room ID
2. Click "Join A Room"
3. Start chatting with others in the same room

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
