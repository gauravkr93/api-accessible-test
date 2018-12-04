var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
  _id: String,
  optionId: String
  
});

module.exports = mongoose.model('answers', AnswerSchema);