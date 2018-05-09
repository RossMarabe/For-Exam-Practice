// Movies.js
// localhost:3000/movies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const request = require('request');

class Movies extends Component {
  constructor(props) {
    super(props)


    // 1. Declared a state field which acts as a movie container
    this.state = {
      movies: []     
    }

    // 2. send a GET request to server to get movies
    //    set the movies data to the state field
    fetch('http://localhost:3001/movie/find-all/')
      .then((response) => { return response.json() })
      .then((body) => {
        this.setState({ movies: body })
        console.log(this.movies);
      })
    this.deleteMovie = this.deleteMovie.bind(this);
    // this.display /= this.display.bind(this);
  }

  deleteMovie(movie){
    // e.preventDefault()
    return request.post(
      'http://localhost:3001/movie/delete',
      {
        form : {_id: movie._id}
      },
      (error, response, body) => {
        console.log(body);
        this.props.history.push('/movies')
        alert('Successfully deleted!!!')
      })
  }
  render() {
    return (
      <div>
        <h2>Movies List</h2>
        <ol>
          {
            // 3. Rendered a list of <li> based on the movies list inside state
            this.state.movies.map((movie) => {
              // console.log("henli");
              return <li key={movie._id}><a href={'/movie/' + movie._id}>{movie.title}</a> <button onClick={() => this.deleteMovie(movie)}>Delete</button></li>
            })
          }
        </ol>
        <a href={'movies/add/'}>Add Movie</a>
      </div>
      )

  }
}

export default Movies;