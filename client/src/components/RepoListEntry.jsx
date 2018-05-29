import React from 'react';

const RepoListEntry = (props) => {
  
  return (
    <div>
      <span> {props.repo.username} </span>
      <span> {props.repo.repo} </span>
    </div>
  )
}

export default RepoListEntry;