import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import {
  CAlert,
  CButton,
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
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';

import logo from '../../../assets/logo/logo.png';
const proxyurl = "https://secure-castle-34160.herokuapp.com/";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
        isSignedUp: false,
        errAutenticacion: false
    };

  }

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  loginAxios(){
    var password = this.state.password;
    var username = this.state.username;

    var base = 'https://aimsoftware.app/NEW_AIMWEB_API/api/v0.1/login/';
    this.setState({errAutenticacion: false})

    axios({
      url: proxyurl + base + 'authenticate',
      //url: "echoping",
      // url: "echouser",
      method: "POST",
      // method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      data: {
        "Usuario": username,
        "Contrasena": password
      }
    })
    .then((response) => {
      const token = response.status;
      // console.log(token)
      localStorage.setItem('token', token);
      if (response.status === 200) {
        this.setState({ isSignedUp: true }); // after signing up, set the state to true. This will trigger a re-render
      }
    })
    .catch(error => {
      console.log("Error:" + error.message);
        this.setState({errAutenticacion: true});
    });

  }

  render() {
    if (this.state.isSignedUp) {
      // Redirecciona al Dashboard al momento de la autenticación
      return <Redirect to = {{ pathname: "./views/dashboard/Dashboard" }} />;
    }

    return (
      <div className="c-app login c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="4">
              <CCardGroup>
                <CCard  id={'cardLogin'} className="card bg-gradient-secondary">
                  <CCardBody>
                    <CForm>
                      <img src={logo} width="100%" height="100%" alt="Logo Aim Reports" />
                      <h2 className="text-center mt-3">Bienvenidos!</h2>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={(e) => this.handleChange(e)} autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={(e) => this.handleChange(e)} autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="12">
                          <CButton color="success" className="btn-block " onClick={ () => this.loginAxios() }>Ingresar</CButton>
                        </CCol>
                        <CCol xs="12 mt-3">
                          <CButton color="primary" className="btn-block">Contacto</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
          <CAlert
            color="danger"
            show = {this.state.errAutenticacion}
            size="xs"
            closeButton
            // onShowChange={this.setState({errAutenticacion: false})}
          >
            <h4 className="alert-heading">Datos Incorrectos!</h4>
            <p>
              Las credenciales de inicio de sesión son incorrectas.
            </p>
            <hr />
            <p className="mb-0">
              Intente nuevamente.
            </p>
          </CAlert>
        </CContainer>
      </div>
    )
  }
  
}

export default Login;
