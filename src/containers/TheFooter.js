import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">AIM Reports</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="http://www.agtigroup.com/" target="_blank" rel="noopener noreferrer">AGTI Group.</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
