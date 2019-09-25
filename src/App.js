import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeWikiSearchTerms: ''
    }
  }

  changeWikiSearchTerms = e => {
    this.setState({
      changeWikiSearchTerms: e.target.value
    });
  }

  render() {
  return (
    <div className="App">
      <h1>Wikipedia Search Engine</h1>
      <form action=''>
       <input type="text" value='' onChange={this.changeWikiSearchTerms} placeholder='Type to Search WikiPedia'  />
       <button type='submit' onClick={}></button>
      </form>
      {wikiSearchResults}
    </div>
    );
  }
}

export default App;
