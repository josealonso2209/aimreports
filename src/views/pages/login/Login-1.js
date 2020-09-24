import React, { Component} from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const proxyurl = "https://secure-castle-34160.herokuapp.com/";

class Login extends Component{
  componentDidMount(){
    //Test Conexión API Con Externa
    // axios.get('https://swapi.dev/api/people/1/')
    // .then(result => {
    //   console.log(result.data)
    // }).catch(console.log);

    //Conexión API AIM Reports ECHOPING
    // const url = "https://aimsoftware.app/NEW_AIMWEB_API/api/v0.1/login/echoping"; // site that doesn’t send Access-Control-*
    // fetch(proxyurl + url)
    // .then(response => response.text())
    // .then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    //Conexión API AIM Reports ECHOUSER
    // const url2 = "https://aimsoftware.app/NEW_AIMWEB_API/api/v0.1/login/echouser"; // site that doesn’t send Access-Control-*
    // fetch(proxyurl + url2)
    // .then(response => response.text())
    // .then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    //Conexión API AIM Reports
    const url3 = "https://aimsoftware.app/NEW_AIMWEB_API/api/v0.1/login/authenticate"; // site that doesn’t send Access-Control-*
    axios.post(proxyurl + url3, {
        Usuario: 'admin',
        Contrasena: 'admin'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  iniciarSesion = () => {
    console.log('iniciar Sesión')
  }
  
  render() {
    return (
      // <h1 class="text-center">Login AIM Reports</h1>
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Iniciar sesión en su cuenta</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Usuario" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Contraseña" autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <button type="button" className="btn btn-success" onClick={this.iniciarSesion()}>Ingresar</button>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          {/* <CButton color="link" className="px-0">Olvidó su contraseña?</CButton> */}
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Login
