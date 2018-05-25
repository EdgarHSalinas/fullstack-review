import React from 'react';

const RepoListEntry = (props) => {
  
  return (
    <div>
      <span> {props.repo.id} </span>
      <span> {props.repo.name} </span>
    </div>
  )
}

export default RepoListEntry;