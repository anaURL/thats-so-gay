import React from 'react'
import { Header } from  '../header/header'
import { Footer } from  '../footer/footer'


const HomeLayout = ({children}) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default HomeLayout;