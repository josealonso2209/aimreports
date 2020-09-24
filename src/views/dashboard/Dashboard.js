import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
  CCardTitle,
  CCardSubtitle,
  CCardText
} from '@coreui/react'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  redirectLogin(){
    const tokenUser = localStorage.getItem('token');
    // console.log(tokenUser);

    if(tokenUser === null || tokenUser !== '200'){
      console.log('entro aqui')
      return <Redirect to = {{pathname: 'Login'}}/>
    }
  }

  render () {

    return (
      <>
        {this.redirectLogin()}

        <CContainer fluid>
          <CRow>
            <CCol lg="12">
              <CCard>
                <CCardHeader>
                  <br></br>
                </CCardHeader>
                <CCardBody>
                  <CCardTitle>
                    <br></br>
                  </CCardTitle>
                  <CCardSubtitle>
                    <br></br>
                  </CCardSubtitle>
                  <CCardText>
                    <br></br>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
        </CRow>
        </CContainer>
      </>
    )
  }
}
export default Dashboard
