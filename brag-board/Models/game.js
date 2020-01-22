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
    comments: [commentSchema],
    user: [{
      type: Schema.Types.ObjectId, 
      ref: 'User',
  }]
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('Game', gameSchema)