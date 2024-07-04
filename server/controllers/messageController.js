const Messages = require("../models/messageModel");

// Function to get messages between two users
module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    // Find messages between the users and sort by update time
    const messages = await Messages.find({
      users: { $all: [from, to] },
    }).sort({ updatedAt: 1 });

    // Project the messages to a simplified format
    const projectedMessages = messages.map((msg) => ({
      fromSelf: msg.sender.toString() === from,
      message: msg.message.text,
    }));

    // Send the projected messages as the response
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

// Function to add a new message to the database
module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;

    // Create a new message document in the database
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    // Respond with a success message if the message was added successfully
    if (data) {
      return res.json({ msg: "Message added successfully." });
    } else {
      return res.json({ msg: "Failed to add message to the database" });
    }
  } catch (ex) {
    next(ex);
  }
};
