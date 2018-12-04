var mongoose = require('mongoose');

var RuleSchema = new mongoose.Schema({
  category: String,
  complexity: Number,
  number:Number
});

module.exports = mongoose.model('rules', RuleSchema);