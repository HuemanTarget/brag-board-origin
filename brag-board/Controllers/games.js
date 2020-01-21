const Game = require('../Models/game')

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
    id: req.params.id,
    game,
        })
    })
}


const newBrag = (req, res) => {
  res.render('games/new', { 
    title: 'Add Game Brag' 
  })
}

const deleteBrag = (req, res) =>{
    Game.findByIdAndDelete({_id:req.params.id}, (err, game)=>{
        if(err){
            return res.redirect('/games')
        } 
        else{
            res.redirect('/games');
             
        }
    })
}

const create = (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  let game = new Game(req.body)
  game.save(err => {
    if (err) return res.redirect('/games/new')
    res.redirect(`/games/`)
  })
}

const edit = (req, res) => {
    res.render('games/edit',{
        id: req.params.id,
        game: req.params.id
    })
}

const update = (req, res) => {
    Game.update(req.params.id, req.body.game);
    res.redirect('/games');
  }

module.exports = {
  index,
  show,
  new: newBrag,
  create,
  delete: deleteBrag,
  edit,
  update,
}
