var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question: String,
  category: String,
  complexity: Number,
  options: [{ answer: String, id: String }]
});

module.exports = mongoose.model('question', QuestionSchema);