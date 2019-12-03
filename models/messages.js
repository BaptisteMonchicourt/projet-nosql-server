const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: String,
  comment: {type: String, default:"No comment."}
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
