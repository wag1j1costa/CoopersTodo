import React from 'react';
import '../Home.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signOut } from "firebase/auth"
import Swal from 'sweetalert2';
import { toastSuccess, toastError } from '../customAlerts';
import MediaQuery from 'react-responsive'
import ReactCardFlip from 'react-card-flip';
import logo from '../img/Logo.png';
import loginImg from '../img/loginImg.png';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isToggleOn: true, 
        isFlipped: false, 
        login: '', 
        password: '' ,
        loginreg: '',
        passwordreg: '',
        isLogged: '', 
        reload: 0,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.signIn = this.signIn.bind(this);
      this.register = this.register.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClickFlip = this.handleClickFlip.bind(this);
      this.handleReload = this.handleReload.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({[name]:value});
    }
    register(){
      var auth = getAuth()
     
      createUserWithEmailAndPassword(auth, this.state.loginreg, this.state.passwordreg).then(
        (user) => {
          this.setState({
            isToggleOn: true, 
            isFlipped: false,
            reload: +1
          })
          toastSuccess(`${user.user.email} foi criado com sucesso`)
        },
        (err) => {
          Swal.fire({
            title: "Não foi possivel realizar o registro.",
            text: `${err.message}`,
            icon: "error",
          });
        }
      );
    }

    signIn(){
     

      var auth = getAuth()
      signInWithEmailAndPassword(auth, this.state.login, this.state.password).then(
        (user) => {
          this.setState({
            isToggleOn: true, 
            isFlipped: false,
            reload: +1
          })
          toastSuccess(`${user.user.email} foi logado com sucesso`)
        },
        (err) => {
          Swal.fire({
            title: "Não foi possivel realizar o login.",
            text: `${err.message}`,
            icon: "error",
          });
        }
      );
    }

    handleLogin(){
      const auth = getAuth();
     
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      .then((result) => {
          //  const token = credential.accessToken;
          this.setState({
            isToggleOn: true, 
            isFlipped: false,
            reload: +1
          })
          toastSuccess(`Logged in as ${result.user.email}`);
      }).catch((error) => {
          toastError(error);
      });
    }

    handleReload() {
     

      signOut(getAuth()).then(() => {
        this.setState({reload: +1})
        toastError(`Logged out`);
      })
      
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    handleClickFlip(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    componentDidMount() {
      
    }

  
    render() {
      const currentUser = getAuth().currentUser

      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
      }
      return (
        <div className="container-fluid">
        <nav className="navbar" id="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" width="200" height="50"/>
            </a>
            <MediaQuery maxWidth={1223}>
            {currentUser === null && <button className="btn btn-sm btn-black me-5 px-4" type="button" onClick={this.handleClick}>Entrar</button>}
              {currentUser !== null && 
              <div className="dropdown">
              <button className="btn btn-sm btn-black dropdown-toggle me-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {currentUser.email.split("@", 1)}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button className="dropdown-item btn-btn-close ms-2" >Logout</button></li>
              </ul>
            </div>
              }
            </MediaQuery>
            <MediaQuery minWidth={1224}>
              <div className="d-flex">
              {currentUser === null && <button className="btn btn-sm btn-black me-md-5 px-5" type="button" key={this.state.reload} onClick={this.handleClick}>Entrar</button>}
              {currentUser !== null && 
              <div className="dropdown">
              <button className="btn btn-sm btn-black dropdown-toggle me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {currentUser.email.split("@", 1)}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button className="dropdown-item btn-btn-close ms-2" onClick={this.handleReload}>Logout</button></li>
              </ul>
            </div>
              }
              </div>
            </MediaQuery>
            
          </div>
        </nav>
        <Modal className="fade" show={this.state.isToggleOn ? false : true} onHide={this.handleClick}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        
          <ModalBody>
            <div className="row">
              <div className="col-3 mt-5">
                <img src={loginImg} className="img-fluid" alt="login"/>
              </div>
              <div className="col-7 mt-5">
                <h1 className="titulo-login">Sign in</h1>
                <h2 className="sub-titulo-login text-break">to access your list</h2>
              </div>
              <div className="col-1">
                <button className="btn-btn-close pull-right" onClick={this.handleClick}>close</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-7">
                <div className="mb-3">
                  <label htmlFor="User" className="form-label fw-bolder mb-0">User:</label>
                  <input type="email"
                    className="form-control" name="login" id="User" value={this.state.login} onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Password" className="form-label fw-bolder mb-0" >Password:</label>
                  <input type="password"
                    className="form-control" name="password" id="Password" value={this.state.password} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-6 my-3 d-grid gap-2 mx-auto">
                <button className="btn btn-green" onClick={this.signIn}>Sign in
                </button>
                <button className="btn-btn-close underline-green" onClick={this.handleClickFlip}>Don't have an account? Register</button>
              </div>
              <div className="col-2">
              </div>
            </div>
          </ModalBody>
        

        
          <ModalBody>
          <div className="row">
            <div className="col-3">
              <button className="btn-btn-close pull-left" onClick={this.handleClickFlip}>back</button>
            </div>
            <div className="col-7 mt-5 mb-2">
              <h1 className="titulo-login">Register</h1>
              <h2 className="sub-titulo-login text-break">to access your list</h2>
            </div>
           <div className="col-1">
           <button className="btn-btn-close pull-right" onClick={this.handleClick}>close</button>
           </div>
          </div>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-7">
                <div className="mb-3">
                  <label htmlFor="User2" className="form-label fw-bolder mb-0">New User:</label>
                  <input type="email"
                    className="form-control" name="loginreg" id="User2" value={this.state.loginreg} onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Password2" className="form-label fw-bolder mb-0">New Password:</label>
                  <input type="password"
                    className="form-control" name="passwordreg" id="Password2" value={this.state.passwordreg} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-6 my-3 d-grid gap-2 mx-auto">
                <button className="btn btn-green" onClick={this.register}>Register</button>
              </div>
              <div className="col-2">
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-6 mb-3 d-grid gap-2 mx-auto">
                <button className="btn btn-black" onClick={this.handleLogin}>Google Login</button>
              </div>
              <div className="col-2">
              </div>
            </div>
          </ModalBody>
        
      </ReactCardFlip>
      </Modal>
        </div>

      );
    }
  }
  
export default Login;