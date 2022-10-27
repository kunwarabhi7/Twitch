import React from 'react'
import Feed from './Feed'
import SideBar from './SideBar'

const BodyBox = () => {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <Feed/>
    </div>
  )
}

export default BodyBox
