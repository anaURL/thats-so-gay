import React from 'react';
import { useState } from 'react';

const MicroagressionsCreate = ({onCreate}) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label> Title </label>
        <input value={title} onChange= {handleChange}/> 
        <button> Add new microaggression</button>
      </form>
    </div>
  )
}

export default MicroagressionsCreate
