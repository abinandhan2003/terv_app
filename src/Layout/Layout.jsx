import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div id='google-font' className='w-full flex justify-center items-center'>
      <div className='w-full md:w-96 h-[95vh] md:h-[100vh] bg-[#2B223E] text-[#FCFCFC] py-10'>
        
        <Outlet />

      </div>
    </div>
  )
}

export default Layout
