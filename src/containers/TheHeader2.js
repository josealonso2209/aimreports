import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CHeaderNav,
  CCreateElement,
  CSidebarNavItem
} from '@coreui/react'
// routes config
// import routes from '../routes'
import navigation from './_navHeader'

const TheHeader = () => {
  return (
    <CHeader withSubheader id={'header2'}>
      <CHeaderNav className="px-3">
        <div className="row">
          <CCreateElement
            items={navigation}
            components={{
            CSidebarNavItem
            }}
          />
        </div>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
