import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-full flex justify-center items-center h-full'>
      <div className='w-full md:w-96 h-[100vh] bg-[#2B223E] text-[#FCFCFC] py-10'>
        
        <Outlet />

      </div>
    </div>
  )
}

export default Layout
