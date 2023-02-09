import React from 'react';
import { useState } from 'react';

const MicroagressionsCreate = ({onCreate}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && content) {
      onCreate(title, content);
      setTitle('');
      setContent('');
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label> Title </label>
        <input value={title} onChange= {handleTitleChange}/> 
        <input value={content} onChange= {handleContentChange}/> 
        <button> Add new microaggression</button>
      </form>
    </div>
  )
}

export default MicroagressionsCreate
