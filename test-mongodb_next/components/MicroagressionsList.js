import React from 'react';
import MicroagressionsShow from './MicroagressionsShow'

const MicroagressionsList = ({microagressions, onDelete, onEdit}) => {
  const renderedMicroagressions = microagressions.map((microagression) => {
    return <MicroagressionsShow onEdit={onEdit} onDelete={onDelete} key={microagression.id} microagression={microagression}/> 
  })
  return (
    <div>
      {renderedMicroagressions}
    </div>
  )
}

export default MicroagressionsList;
