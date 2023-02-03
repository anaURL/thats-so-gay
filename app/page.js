import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navbar/NavBar";
import "../styles/globals.css";
import Image from "next/image";
import { Examples } from "./examples/examples";

export default function Page() {
  return (
    <div className="bg-purple">
      <NavBar />

      <main className="">
        <div className="relative px-6 lg:px-8">
          <div className="lg:max-w-3xl py-32 sm:py-48 lg:py-56 items-start">
            <div className="lg:max-w-2xl text-center overflow-hidden">
              <h1 className="block items-center text-gray-900 text-7xl lg:text-5xl font-black text-lime tracking-tight mb-4 drop-shadow-lg shadow-lime text-center overflow-hidden">
                That's so gay!
              </h1>
              <p className="block xl:inline text-white font-light text-4xl leading-normal lg:text-2xl text-center overflow-hidden">
                Why you shouldn't be using this and other microagressions toward
                the queer community
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                <div className="rounded-md">
                  {" "}
                  <a
                    href="/examples"
                    className="flex w-full items-center justify-center rounded-md border-2 px-8 py-3 text-2xl lg:text-base font-bold md:py-4 md:px-10 text-black bg-gradient-to-r from-greenish to-lime"
                  >
                    {" "}
                    Tell me more!
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 ">
                  <a
                    href="/add"
                    className="flex w-full items-center justify-center rounded-md border-2  hover:text-lime focus:ring-4 focus:outline-none px-8 py-3 text-2xl lg:text-base font-bold  md:py-4 md:px-10"
                  >
                    Contribute
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className=" m-0 p-0 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 text-transparent transition-all hover:bg-black bg-white">
        <Image
          src="https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="A person with amazing makeup"
          className="h-full w-full object-cover lg:h-full lg:w-full"
          sizes="100vw"
          width={500}
          height={500}
          blurDataURL="data:..."
          placeholder="blur"
          priority // Optional blur-up while loading
        />
        {/* <div className="hidden lg:flex justify-center text-base img-bg"> <p className="justify-center sm:absolute sm:top-3/4 sm:left-10 text-base">  (def.) Microaggressions are everyday snubs and insults that marginalized groups face.
			They're often very subtle comments or actions that come from implicit bias and/or stereotypes. 
			They might seem like a compliment (“You're beautiful for a transgender girl”), a harmless comment (“Where are you really from?”), 
		   or a subconscious action (crossing the street to avoid a racialized person). </p>
            </div> */}
      </div>
    </div>
  );
}
