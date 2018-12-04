var mongoose = require('mongoose');

var RuleSchema = new mongoose.Schema({
  name: String,
  rules: [{_id:String}],
  time:Number
});

module.exports = mongoose.model('tests', RuleSchema);