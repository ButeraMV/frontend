import React, { Component } from 'react';
import MovieList from './MovieList'

class RatingsPage extends Component {
  render() {
    return (
      <div className='ratings-page'>
        <h3>Please rate the following movies:</h3>
        <MovieList />
      </div>
    );
  }
}

export default RatingsPage;
