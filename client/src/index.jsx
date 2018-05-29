import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }
  getRepos() {
    axios.get('/repos')
      .then( (repos) => {
        this.setState({
          repos: repos.data
        });
      }) 
      .catch( (err) => console.log('GET REQUEST FAILED: ', err));
  }

  search (term) {
    console.log(`${term} was searched`);
    
    axios.post('/repos', {term})
      .then( (data) => {
        console.log(data);
        this.getRepos();
      })
      .catch( (err) => console.log('POST REQUEST FAILED: ', err));
  }

  componentDidMount() {
    this.getRepos();
  }


  render () {
  
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));