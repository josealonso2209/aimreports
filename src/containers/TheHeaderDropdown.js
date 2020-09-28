import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class TheHeaderDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  redirectLogin(){
    console.log('entro aqui');
    localStorage.clear();
    this.props.history.push("/");  }

  render(){
    return (
      <CDropdown
        inNav
        className="c-header-nav-items mx-2"
        direction="down"
      >
        <CDropdownToggle className="c-header-nav-link avatar" caret={false} id={'headerNav'}>
          <div className="c-avatar">
            {/* <CImg
              src={'avatars/6.jpg'}
              className="c-avatar-img"
              alt="photo-user"
            /> */}
            <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem
            onClick={() => this.redirectLogin()}
          >
            <CIcon name="cil-lock-locked" className="mfe-2" /> 
            Cerrar sesión
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
    
  }
}

export default withRouter(TheHeaderDropdown);


// const TheHeaderDropdown = () => {
//   return (
//     <CDropdown
//       inNav
//       className="c-header-nav-items mx-2"
//       direction="down"
//     >
//       <CDropdownToggle className="c-header-nav-link" caret={false}>
//         <div className="c-avatar">
//           <CImg
//             src={'avatars/6.jpg'}
//             className="c-avatar-img"
//             alt="admin@bootstrapmaster.com"
//           />
//         </div>
//       </CDropdownToggle>
//       <CDropdownMenu className="pt-0" placement="bottom-end">
//         {/* <CDropdownItem
//           header
//           tag="div"
//           color="light"
//           className="text-center"
//         >
//           <strong>Account</strong>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-bell" className="mfe-2" /> 
//           Updates
//           <CBadge color="info" className="mfs-auto">42</CBadge>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-envelope-open" className="mfe-2" /> 
//           Messages
//           <CBadge color="success" className="mfs-auto">42</CBadge>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-task" className="mfe-2" /> 
//           Tasks
//           <CBadge color="danger" className="mfs-auto">42</CBadge>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-comment-square" className="mfe-2" /> 
//           Comments
//           <CBadge color="warning" className="mfs-auto">42</CBadge>
//         </CDropdownItem>
//         <CDropdownItem
//           header
//           tag="div"
//           color="light"
//           className="text-center"
//         >
//           <strong>Settings</strong>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-user" className="mfe-2" />Profile
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-settings" className="mfe-2" /> 
//           Settings
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-credit-card" className="mfe-2" /> 
//           Payments
//           <CBadge color="secondary" className="mfs-auto">42</CBadge>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CIcon name="cil-file" className="mfe-2" /> 
//           Projects
//           <CBadge color="primary" className="mfs-auto">42</CBadge>
//         </CDropdownItem>
//         <CDropdownItem divider /> */}
//         <CDropdownItem>
//           <CIcon name="cil-lock-locked" className="mfe-2" /> 
//           Cerrar sesión
//         </CDropdownItem>
//       </CDropdownMenu>
//     </CDropdown>
//   )
// }
