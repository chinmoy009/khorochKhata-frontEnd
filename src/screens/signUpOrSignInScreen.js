import React, { Component } from 'react'
import {connect} from 'react-redux';
import './../styles/signInSignUp.css';
import {USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL, USER_MODE_SIGN_UP, USER_MODE_SIGN_IN, CONFIRM_PASSWORD, USERNAME_PLACEHOLDER, FIRST_NAME_PLACEHOLDER,
  LAST_NAME_PLACEHOLDER, EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER, SIGN_IN, SIGN_UP, REGISTER, ALREADY_HAVE_AN_ACCOUNT, DONT_HAVE_AN_ACCOUNT } from '../constants/signInOrSignUpConstants';
import {MESSAGE_TYPE_DANGER} from '../constants/messageBoxConstant';
import {getEncryptedPasswordString} from '../commonServices/encryption.svc';
import {validateSignUpUserObject} from '../commonServices/validation.svc';
import {signIn, signUp, getServerConstants} from '../actions/userAction';
import lodash from 'lodash';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';

class SignUpOrSignInScreen extends Component {
  constructor(props) {
    super(props);
    this.initializeState(props.mode);
  }

  initializeState(mode) {
    this.state = {
      "username": "",
      "password": "",
      "signInOrSignUpMode": mode,
      "firstname": "",
      "lastname": "",
      "email": "",
      "confrimPassword": "",
      ...this.getScreenFooterLabels(mode),
      "error": null,
      "loading": false
    };
  }


  static getDerivedStateFromProps(props, state) {
    let error = props.userInfoError || props.serverConstantObjError;
    let loading = props.userInfoLoading || props.serverConstatntObjLoading;
    return {
      ...state,
      error: error,
      loading: loading
    };
  }


  componentDidMount() {
    let serverConstantObj = lodash.get(this, "props.serverConstantObj.serverConstantObj", null);
    if(lodash.isEmpty(serverConstantObj)) {
      this.props.getServerConstants();
    }
  }


  getScreenFooterLabels(mode) {
    let questionText =  mode == USER_MODE_SIGN_UP ? ALREADY_HAVE_AN_ACCOUNT : DONT_HAVE_AN_ACCOUNT + "  ";
    return {
      "questionText": questionText,
      "buttonText": mode == USER_MODE_SIGN_UP ? SIGN_UP : SIGN_IN,
      "alternateButtonText": mode == USER_MODE_SIGN_UP ? SIGN_IN : REGISTER
    }
  }

  matchPassword(password, confirmPassword) {
    return password == confirmPassword;
  }

  setUserName(value) {
    this.setState({
      ...this.state,
      "username": value
    })
  }

  setFirstName(value) {
    this.setState({
      ...this.state,
      "firstname": value
    })
  }

  setLastName(value) {
    this.setState({
      ...this.state,
      "lastname": value
    })
  }

  setEmail(value) {
    this.setState({
      ...this.state,
      "email": value
    })
  }

  setPassword(value) {
    this.setState({
      ...this.state,
      "password": value,
      "error": null,
      "confirmPassword": ""
    })
  }

  setConfirmPassword(value) {
    let error = this.matchPassword(this.state.password, value) ? "" : null;
    this.setState({
      ...this.state,
      "confirmPassword": value,
      error: error
    });
  }


 alternateLinkClicked() {
   let mode = this.state.signInOrSignUpMode == USER_MODE_SIGN_UP ? USER_MODE_SIGN_IN : USER_MODE_SIGN_UP;
   this.setState({
     ...this.state,
     "signInOrSignUpMode": mode,
     ...this.getScreenFooterLabels(mode)
   });
 }


 signInOrSignUpEventClicked() {
    if(this.state.signInOrSignUpMode == USER_MODE_SIGN_IN) {
       this.props.signIn(this.state.username, this.state.password);
    } else {
      let validationFailure = validateSignUpUserObject(this.state);
      if(lodash.isEmpty(validationFailure)) {
        this.props.signUp(this.state);
      } else {
        this.setState({
          ...this.state,
          error: validationFailure
        });
      }
    }
 }


  render() {
    return (
       <div>
          {this.state.loading && <LoadingBox></LoadingBox>}
          {this.state.error && <MessageBox message={this.state.error} messageType={MESSAGE_TYPE_DANGER}></MessageBox>}
          <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="/images/khorochKhata.jpg" className="img-fluid"
                  alt="khoroch-Khata-Demo"/>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
        
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
        
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div> 
        
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div> */}
        
                  
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="signUpOrInUserName">{USERNAME}</label>
                    <input type="text" id="signUpOrInUserName" className="form-control form-control-lg"
                      placeholder={USERNAME_PLACEHOLDER} required onChange={(e) => this.setUserName(e.target.value)}/>
                  </div>

                  {this.state.signInOrSignUpMode == USER_MODE_SIGN_UP && <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">{EMAIL}</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                      placeholder={EMAIL_PLACEHOLDER} required onChange={(e) => this.setEmail(e.target.value)} />
                  </div> }


                  {this.state.signInOrSignUpMode == USER_MODE_SIGN_UP && <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="firstName">{FIRST_NAME}</label>
                    <input type="text" id="firstName" className="form-control form-control-lg"
                      placeholder={FIRST_NAME_PLACEHOLDER} required onChange={(e) => this.setFirstName(e.target.value)}/>
                  </div>}

                  {this.state.signInOrSignUpMode == USER_MODE_SIGN_UP && <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="lastName">{LAST_NAME}</label>
                    <input type="text" id="lastName" className="form-control form-control-lg"
                      placeholder={LAST_NAME_PLACEHOLDER} required onChange={(e) => this.setLastName(e.target.value)}/>
                  </div>}
        
                  
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="passwordField">{PASSWORD}</label>
                    <input type="password" id="passwordField" className="form-control form-control-lg"
                      placeholder={PASSWORD_PLACEHOLDER} required onChange={(e) => this.setPassword(e.target.value)}/>
                  </div>

                  { this.state.signInOrSignUpMode == USER_MODE_SIGN_UP && <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="confirmPassword">{CONFIRM_PASSWORD}</label>
                    <input type="password" id="confirmPassword" className="form-control form-control-lg"
                      placeholder={CONFIRM_PASSWORD} required onChange={(e) => this.setConfirmPassword(e.target.value)}/>
                  </div>}
        
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div> */}
        
                  <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="button" className="btn btn-primary btn-lg"
                      style={{paddingLeft: '2.5rem', paddingRight: '2..5rem'}} onClick={(e) => this.signInOrSignUpEventClicked()}>{this.state.buttonText}</button> 
                    
                    <p className="small fw-bold mt-2 pt-1 mb-0">{this.state.questionText}<a href="#!"
                        className={`${this.state.signInOrSignUpMode == USER_MODE_SIGN_UP ? 'link-success' : 'link-danger'}`} onClick={(e) => this.alternateLinkClicked()}>{this.state.alternateButtonText}</a></p>
                  </div>
        
                </form>
              </div>
            </div>
          </div>
        </section>
       </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userSignIn.userInfo,
  serverConstantObj: state.serverConstantObj,
  userInfoError: state.userSignIn.error,
  userInfoLoading: state.userSignIn.loading,
  serverConstantObjError: state.serverConstantObj.error,
  serverConstatntObjLoading: state.serverConstantObj.loading
});

const mapDispatchToProps = {
  signIn, 
  signUp,
  getServerConstants
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUpOrSignInScreen);
