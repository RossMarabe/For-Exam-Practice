 const Movie = require('mongoose').model('Movie');

exports.findAll = (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      console.log(err + "blep"); 
      res.send({});
    } else {
      res.send(movies);
    }
  });
}

exports.findById = (req, res) => {
  const _id = req.params._id;

  Movie.findOne({ _id }, (err, movie) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(movie);
    }
  });
}

exports.add = (req, res) => {
  const newMovie = new Movie(req.body);

  newMovie.save((err, movie) => {
    if (err) { 

      res.send({}); 
    }
    else {
      console.log("bblep blep belp")
      res.json(movie);
    }
  });
}

exports.delete = (req, res) => {
  const _id = req.body._id;

  Movie.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
}