import React from 'react';
import { useState } from 'react';

const MicroagressionsCreate = ({microagressions, handleSetMicroagressions}) => {

  console.log({microagressions})
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  function addMicroagression(microagression) {
    console.log('i am in addMicroagression')
    handleMicroagressions([...microagressions, microagression])
  }

  const handleSubmit = (event) => {
    console.log({event})
    event.preventDefault();
    console.log("submitting!!!")
    console.log({title}, {content})

    if (title && content) {
      console.log('i am in here!')
      onCreate(title, content);
      const newMicroagression = {
        title,
        content,
        date: "",
        __v: 0,
        _id: ""
      }
      console.log({newMicroagression})
      addMicroagression(newMicroagression)
      setTitle('');
      setContent('');
    }

  }

  return (
    <div className={""}>
      <form className={"flex flex-col max-w-lg pl-8"} onSubmit={handleSubmit}> 
        <label className={"text-2xl"}> Title </label>
        <input className={"mb-2"} value={title} onChange= {handleTitleChange}/> 
        {/* <input className={"mr-4"} value={content} onChange= {handleContentChange}/>  */}
        <textarea
          id="comment"
          placeholder="Please describe why is this harmful."
          required={true}
          rows={4}
        />
        <button 
          className={'border-2 p-4 my-4'}
          onClick={(event) => handleSubmit(event)}
        >
          Add new microaggression
        </button>
      </form>
    </div>
  )
}

export default MicroagressionsCreate
