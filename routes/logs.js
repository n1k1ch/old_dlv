/**
 * Created by Nikita on 23.12.2014.
 */
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.send('{"title": "List Of Logs", "logs":[{"name":"The First log"},{"name": "The Second log"}]}');
});

module.exports = router;