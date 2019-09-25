import React from 'react';
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
      WikiSearchTerms: e.target.value
    });
  }

  useWikiSearchEngine = () => {
    e.preventDefault();
  }

  render() {
    let wikiSearchResults = [];

  return (
    <div className="App">
      <h1>Wikipedia Search Engine</h1>
      <form action=''>
       <input type="text" value={this.state.WikiSearchTerms || ''} onChange={this.changeWikiSearchTerms} placeholder='Type to Search WikiPedia'  />
       <button type='submit' onClick={this.useWikiSearchEngine}>Search</button>
      </form>
      {wikiSearchResults}
    </div>
    );
  }
}

export default App;
