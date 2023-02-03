"use client";
import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true} className="bg-purple max-w-3xl items-center">
        <Navbar.Brand href="">
          <Image
            src="/img/logo.png"
            alt="That's so gay logo"
            width={80}
            height={80}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            That's so gay
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        {/* <div className="flex md:order-2">
          <Button>Get started</Button>
         
        </div> */}
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true} className="flex md:order-2">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/examples">Examples</Navbar.Link>
          <Navbar.Link href="/resources">Resources</Navbar.Link>
          <Navbar.Link href="/Login">Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
