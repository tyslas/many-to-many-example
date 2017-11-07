var express = require('express');
var router = express.Router();
var dbConnection = require('../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies/:id', function(req, res, next) {
  dbConnection('movie').where('movie.id', req.params.id)
  .select('movie.title', 'actor.name')
  .innerJoin('actor_movie', 'movie.id', 'actor_movie.movie_id')
  .innerJoin('actor', 'actor.id', 'actor_movie.actor_id')
  .then((movieInfo) => {
    res.status(201).json({
      status: 'success',
      data: movieInfo
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  });
});

module.exports = router;
