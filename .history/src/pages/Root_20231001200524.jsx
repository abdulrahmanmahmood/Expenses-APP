import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <header>
        My header
        <Outlet/>
      </header>
    </div>
  )
}

export default Root