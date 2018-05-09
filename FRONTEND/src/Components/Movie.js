import React, { Component } from 'react';

class Movie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.match.params._id,
      title: '',
      actor: '',
      year: '',
      franchise: '',
      director: ''
    }

    fetch('http://localhost:3001/movie/find-by-id/' + this.state._id)
      .then((response) => { return response.json() })
      .then((body) => {
        this.setState({
          title: body.title,
          actor: body.actor,
          year: body.year,
          franchise: body.franchise,
          director: body.director
        })
      })
  }

  render() {
    const { title, actor, year, franchise, director } = this.state

    return (
      <div>
        <h3>{ title }</h3>
        Actor: { actor }<br/>
        Year: { year }<br/>
        Franchise: { franchise }<br/>
        Director: { director } 
      </div>
      )
  }
}

export default Movie