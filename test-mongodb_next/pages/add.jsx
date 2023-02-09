import React from "react";
import NavBar from "../components/NavBar";

export const add = () => {
  return (
    <div>
      <NavBar/>
      <div id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Add new microagression" />
        </div>
        
        <Textarea
          id="comment"
          placeholder="Please describe why is this harmful."
          required={true}
          rows={4}
        />
      </div>
    </div>
  );
};
