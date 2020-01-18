const mongoose = require('mongoose')
const Schema = mongoose.Schema

var commentSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  });

var gameSchema = new Schema({
    title: String,
    content: String,
    proof: String,
    shame: Boolean,
    user: [{
      type: Schema.Types.ObjectId, 
      ref: 'User',
    comments: [commentSchema],
  }]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Game', gameSchema)