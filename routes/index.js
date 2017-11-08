var express = require('express');
var router = express.Router();
var dbConnection = require('../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', function(req, res, next) {
  return dbConnection.select().table('movie')
  .then((movieData) => {
    res.status(200).json({
      status: 'success',
      data: movieData
    });
  });
});

router.get('/movies/:id', function(req, res, next) {
//return a single movie using the id parameter

// return dbConnection.select().table('movie').where('id', req.params.id)
return dbConnection('movie').where('movie.id', req.params.id)
  .select('movie.title', 'actor.name')
  .innerJoin('actor_movie', 'movie.id', 'actor_movie.movie_id')
  .innerJoin('actor', 'actor.id', 'actor_movie.actor_id')


// write code here

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
