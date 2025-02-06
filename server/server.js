const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Load users
const usersFile = path.join(__dirname, 'users.json');
let users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ username, password });
  fs.writeFileSync(usersFile, JSON.stringify(users));
  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});