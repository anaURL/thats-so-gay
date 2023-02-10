import React from "react";
import { useState } from "react";
import { ObjectID } from 'mongodb';


const MicroagressionsCreate = ({
  microagressions,
  handleSetMicroagressions,
}) => {
  // console.log({microagressions})
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  function addMicroagression(microagression) {
    // console.log('i am in addMicroagression')
    handleSetMicroagressions([...microagressions, microagression]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && content) {
      const newMicroagression = {
        title,
        content,
        date: "",
        __v: 0,
        _id: new ObjectID(),
      };

      fetch("/api/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMicroagression),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          addMicroagression(data);
          setTitle("");
          setContent("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={""}>
      <form className={"flex flex-col max-w-lg pl-8"} onSubmit={handleSubmit}>
        <label className={"text-2xl"}> Title </label>
        <input className={"mb-2"} value={title} onChange={handleTitleChange} />
        {/* <input className={"mr-4"} value={content} onChange= {handleContentChange}/>  */}
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="Please describe why is this harmful."
          required={true}
          rows={4}
        />
        <button
          className={"border-2 p-4 my-4"}
          onClick={(event) => handleSubmit(event)}
        >
          {" "}
          Add new microaggression
        </button>
      </form>
    </div>
  );
};

export default MicroagressionsCreate;
