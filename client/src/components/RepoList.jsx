import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = (props) => {
  return (
    <div>
     {props.repos.map((repo, index) => {
       return (
          <RepoListEntry
            key={index}
            repo={repo}
          />
         )
       })
     
     }
    </div>
   
  )
}

export default RepoList;