var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");

router.get("/", gamesCtrl.index);
router.get("/new", gamesCtrl.new);
router.get("/:id", gamesCtrl.show);
router.get('/edit/:id', gamesCtrl.edit)
router.put('/edit/:id', gamesCtrl.update)
router.post("/", gamesCtrl.create);
router.delete('/:id', gamesCtrl.delete);

module.exports = router;
