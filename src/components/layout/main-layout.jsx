import React from 'react'
import { Header } from  '../../../app/header/header'
import { Footer } from  '../../../app/footer/footer'


const MainLayout = ({children}) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default MainLayout;