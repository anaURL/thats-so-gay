
import React from "react"; 


export const Header = () => {
    return (
        <> 
<div class="bg-purple py-12 overflow-hidden">
  <div class="mx-auto items-center max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center  md:px-12 my-6">

      <h1 class="<%= titleColor %> md:mt-2 lg:text-7xl md:text-7xl text-4xl font-black sm:leading-8 md:tracking-tight md:px-8"> <%= title %> </h1>
      <h3 class="text-2xl py-5 font-light md:mt-8 <%= descriptionColor %>">
          <%= description %> 
         </h3>
  </div>
  </div>

</div>
</> 

); 
}

