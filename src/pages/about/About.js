import React from 'react';
import './About.css';
import {Author} from '../../components/author/Author';

export default class AboutPage extends React.Component {
  render () {
    return (
      <div className="App" id="about-board">
        <h3>Hi! We're in About</h3>
        <Author
          name="Diogo"
          info={{work: 'teacher', description: 'nice teacher'}}
        />
      </div>
    );
  }
}
