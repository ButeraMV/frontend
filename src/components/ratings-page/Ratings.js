import React, { Component } from 'react';

class Ratings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: 0
    }

    this.assignStars = this.assignStars.bind(this)
  }

  assignStars() {
    //event.preventDefault();
    //fetch('/', {
     //method: 'post',
     //headers: {'Content-Type':'application/json'},
     //body: {
      //'rating': this.stars
     //}
    //});

    this.setState({stars: parseInt(this.id)})
    console.log(this.state.stars)

  }

  render() {
    return (
      <div>
        <button id='1' onClick={this.assignStars}>1</button>
        <button id='2' onClick={this.assignStars}>2</button>
        <button id='3' onClick={this.assignStars}>3</button>
        <button id='4' onClick={this.assignStars}>4</button>
        <button id='5' onClick={this.assignStars}>5</button>
      </div>

      //<p>test</p>
    );
  }
}

export default Ratings;

