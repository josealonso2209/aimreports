import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
CCreateElement,
CSidebar,
// CSidebarBrand,
CSidebarNav,
// CSidebarMinimizer,
CSidebarNavItem,
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav2'

const TheSidebar2 = () => {
const dispatch = useDispatch()
const show = useSelector(state => state.sidebarShow)

return (
<CSidebar
    show={show}
    id={'sidebar2'}
    onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
>
    <CSidebarNav id={'sidebarnav2'}>

    <CCreateElement
        items={navigation}
        components={{
        CSidebarNavItem
        }}
    />
    </CSidebarNav>
</CSidebar>
)
}

export default React.memo(TheSidebar2)
