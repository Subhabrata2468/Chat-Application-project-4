const express = require('express');
const cors = require('cors');
const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://44.203.31.86:30970', // Replace with your frontend IP and port
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Define a test route
app.post('/api/auth/register', (req, res) => {
  res.send('CORS-enabled for specific origins.');
});

const PORT = process.env.PORT || 30980;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
