import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router'
import Footer from '../Footer'

function Main() {
  return (
    <div className='flex min-h-screen flex-col'>
            <Header/>
            <main className='flex-1 container mx-auto'>
                <Outlet/>
            </main>
            <Footer/>
    </div>
  )
}

export default Main