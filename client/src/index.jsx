import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import './data.json';

var data = [
  {
  "id": 1234,
  "name": "test",
  "full_name": "test/test2"
  },
  {
    "id": 5678,
    "name": "test2",
    "full_name": "test2/test4"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [
        {
        "id": 1234,
        "name": "test",
        "full_name": "test/test2"
        },
        {
          "id": 5678,
          "name": "test2",
          "full_name": "test2/test4"
        }
      ]
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
  }

  render () {
    console.log(this.state);
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));