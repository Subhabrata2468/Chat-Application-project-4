// backend/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define route for /api/auth/register
app.get('/api/auth/register', (req, res) => {
  // Your registration logic here
  res.send('Registration endpoint accessed');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
