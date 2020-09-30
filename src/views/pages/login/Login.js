import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
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

pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        console.log('Pulsaste Enter');
        var boton = document.getElementById("boton");
        boton.triggerHandler('click');
    }
}
  
  render() {
    if (this.state.isSignedUp) {
      // Redirecciona al Dashboard al momento de la autenticación
      return <Redirect to = {{ pathname: "/dashboard" }} />;
    }

    return (
      <div className="c-app login c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="4">
              <CCardGroup>
                <CCard  id={'cardLogin'} className="card">
                  <CCardBody>
                    <CForm>
                      <img src={logo} width="100%" height="100%" alt="Logo Aim Reports" />
                      <h2 className="text-center">Bienvenidos!</h2>
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
                          <CButton color="success" className="btn-block " onClick={ () => this.loginAxios()} onKeyPress={() =>this.pulsar()} >Ingresar</CButton>
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
            <CModal
              id={'styleModal'}
              className="opacidadModal"
              show = {this.state.errAutenticacion}
              size=""
              // closeButton
              // onShowChange={this.setState({errAutenticacion: false})}
            >
              <CModalHeader closeButton>
                <CModalTitle id={'styleModalTitle'}className="color-title">
                  <div>
                    <div>
                      <svg width="25px" height="25px" viewBox="0 0 17 16" className="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                      </svg>
                      <span style={{marginLeft:'10px', fontSize:'20px'}}>Datos Incorrectos!</span>
                    </div>
                  </div>
                  </CModalTitle>
              </CModalHeader>
              <CModalBody>
                <p style={{fontSize:'16px'}}>
                  Las credenciales de inicio de sesión son incorrectas.
                </p>
            </CModalBody>
          </CModal>
          </CRow>
        </CContainer>
      </div>
    )
  }
  
}

export default Login;
