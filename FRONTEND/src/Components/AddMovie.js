import React, { Component } from 'react';
const request = require('request')

class AddMovie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      actor: '',
      year: 0,
      franchise: '',
      director: ''
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeActor = this.handleChangeActor.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeFranchise = this.handleChangeFranchise.bind(this);
    this.handleChangeDirector = this.handleChangeDirector.bind(this);
    this.add = this.add.bind(this);
  }

  handleChangeTitle(e){
    this.setState({title: e.target.value });
  }

  handleChangeActor(e){
   this.setState({actor: e.target.value }); 
  }

  handleChangeYear(e){
    this.setState({year: e.target.value });
  }

  handleChangeFranchise(e){
    this.setState({franchise: e.target.value });
  }

  handleChangeDirector(e){
    this.setState({director: e.target.value });
  }

  add(e){
    if(this.state.title){
    return request.post(
      'http://localhost:3001/movie/add', {
        form : this.state
      }, (error, response, body) => {
        console.log(body);
        this.props.history.push('/movies')
        alert('Successfully added!!!')
      })
    }
  }


  render() {
    const { title, actor, year, franchise, director } = this.state

    return (
      <div>
        Title:  <input type='text' onChange={this.handleChangeTitle} name='title'/> <br/>
        Actor:<input type='text' onChange={this.handleChangeActor} name='actor'/> <br/>
        Year: <input type='year' onChange={this.handleChangeYear} name='year'/> <br/>
        Franchise: <input type='text'onChange={this.handleChangeFranchise} name='franchise'/> <br/>
        Director: <input type='text' onChange={this.handleChangeDirector} name='director'/>  <br/>
        <button onClick={this.add}> ADD MOVIE </button>
      </div>
    )
  }
}

export default AddMovie