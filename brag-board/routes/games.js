var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");
var commentsCtrl = require('../controllers/comments');

router.get("/", gamesCtrl.index);
router.get("/new", gamesCtrl.new);
router.get("/:id", gamesCtrl.show);
router.get('/edit/:id', gamesCtrl.edit)
router.put('/edit/:id', gamesCtrl.update)
router.post("/", gamesCtrl.create);
router.post('/:id/comments', commentsCtrl.create);
router.delete('/:id', gamesCtrl.delete);

module.exports = router;
