var Game = require('../models/game')

const index = (req, res) => {
  Game.find({}, (err, games) => {
    res.render('games/index', { 
      title: 'All Game Brags', 
      games
    })
  })
}

const show = (req, res) => {
  Game.findById(req.params.id)
    /* .populate('ticket') */
    .exec((err, game) => {
      // Performer.find({}).where('_id').nin(movie.cast)
      /* Ticket.find({ _id: { $nin: flight.ticket } }).exec((err, seat) => { */
        res.render('games/show', {
          title: 'Game Brag Detail',
          game,
        })
      })
    }


const newBrag = (req, res) => {
  res.render('games/new', { 
    title: 'Add Game Brag' 
  })
}

const create = (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  var game = new Game(req.body)
  game.save(err => {
    if (err) return res.redirect('/games/new')
    // res.redirect('/movies');
    res.redirect(`/games/${game._id}`)
  })
}

module.exports = {
  index,
  show,
  new: newBrag,
  create,
}
