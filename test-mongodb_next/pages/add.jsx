import React from "react";
import NavBar from "../components/NavBar";
import MicroagressionsCreate from '../components/MicroagressionsCreate'


export default function Add() {
  return (
    <div>
      <NavBar/>
      <MicroagressionsCreate/>
      <div id="textarea">
        <div className="mb-2 block">
          <label htmlFor="comment" value="Add new microagression" />
        </div>
{/*         
        <textarea
          id="comment"
          placeholder="Please describe why is this harmful."
          required={true}
          rows={4}
        /> */}
      </div>
    </div>
  );
};
