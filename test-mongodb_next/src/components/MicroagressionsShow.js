import React from 'react';
import {useState} from 'react';
import MicroagressionsEdit from './MicroagressionsEdit';

const MicroagressionsShow = ({microagression,onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)
  
  const handleDeleteClick = () => {
    onDelete(microagression.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

    let subject = <h3> {microagression.title} {microagression.content}</h3>
    if (showEdit) {
      subject = <MicroagressionsEdit onEdit={onEdit} microagression={microagression} />
    }

    return (
      <div>
        <div> {subject}</div>
        <div> 
        <button className='' onClick={handleEditClick}>Edit </button>
        <button className='' onClick={handleDeleteClick}> Delete </button>
        </div>
      </div>
    )
  }

export default MicroagressionsShow
