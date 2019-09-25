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
      wikiSearchReturnValue: [],
      WikiSearchTerms: e.target.value
    });
  }

  useWikiSearchEngine = (e) => {
    e.preventDefault();

    this.setState({
      wikiSearchReturnValue: []
    });

    const pointerToThis= this;

    var url = 'https://www.mediawiki.org/w/api.php';

    var params = {
      action: 'query',
      list: 'search',
      srsearch: this.state.WikiSearchTerms,
      format: 'json'
    };

    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    fetch(url)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function (response) {
        // console.log(response);

        for (var key in response.query.search) {
          pointerToThis.state.wikiSearchReturnValues.push({
            queryResultPageFullURL: 'no link',
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet
          });
        }
      }
    )
    .then(
      function (response) {
        for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
          // console.log(pointerToThis.state.wikiSearchReturnValues);
          let page = pointerToThis.state.wikiSearchReturnValues[key2];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          fetch(urlForRetrievingPageURLByPageID)
            .then(
              function (response) {
                return response.json();
              }
            )
            .then(
              function (response) {
                page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

                pointerToThis.forceUpdate();
              }
            )
        }
      }
    )
}

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
