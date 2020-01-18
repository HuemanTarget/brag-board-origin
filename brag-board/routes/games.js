var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");

router.get("/", gamesCtrl.index);
router.post("/", gamesCtrl.create);
router.get("/new", gamesCtrl.new);
router.get("/:id", gamesCtrl.show);

module.exports = router;
