import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheSidebar2,
  TheFooter,
  TheHeader,
  TheHeader2
} from './index'

const TheLayout = () => {

  return (
    <div>
      <TheHeader/>
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <TheSidebar2/>
      <div className="c-wrapper">
        <TheHeader2/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    </div>

  )
}

export default TheLayout
