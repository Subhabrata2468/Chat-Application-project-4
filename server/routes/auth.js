const express = require('express');
const router = express.Router();
const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require('../controllers/userController');

// Use the imported controller methods
router.post('/login', login);
router.post('/register', register);
router.get('/allusers/:id', getAllUsers);
router.post('/setavatar/:id', setAvatar);
router.get('/logout/:id', logOut);

// Additional routes can be defined here if needed
// For example, a simple ping route:
router.get('/ping', (req, res) => {
  res.json({ msg: 'Ping Successful' });
});

module.exports = router;
