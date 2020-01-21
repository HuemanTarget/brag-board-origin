const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema = new Schema({
    content: String,
    rating: {
      type: String,
      enum: ['Awesome Job!', 'Keep It Up!', 'I Can Do Better!', 'SHAME!'],
    }
  }, {
    timestamps: true
  });

let gameSchema = new Schema({
    game: {
      type: String,
      enum: ['Call Of Duty', 'Destiny', 'Fortnite', 'Halo'],
    },
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