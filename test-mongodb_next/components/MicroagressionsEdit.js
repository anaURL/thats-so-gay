import React from 'react';
import {useState} from 'react';

const MicroagressionsEdit = ({microagression,onSubmit}) => {
    const [title,setTitle] = useState(microagression.title)
    const [content,setContent] = useState(microagression.content)

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(microagression.id, title, content)
        
    }

  return (
    <form onSubmit={handleSubmit} className=' '>
    <label> Title</label>
    <input value={title} onChange={handleTitleChange} className='input' />
    <label> Content</label>
    <input value={content} onChange={handleContentChange} className='input' />
    <button className='' > 
    Save
    </button>

   </form> 
  )
}

export default MicroagressionsEdit
