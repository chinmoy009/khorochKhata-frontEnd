import React, { Component } from 'react';
import {connect} from 'react-redux';
import SignInOrSignUpScreen from '../screens/signUpOrSignInScreen';
import lodash from 'lodash';
import {USER_MODE_SIGN_IN} from '../constants/signInOrSignUpConstants';

class HomeScreen extends Component {
  render() {
    return (
      <div>
          {lodash.isEmpty(this.props.userInfo) 
            ? <SignInOrSignUpScreen mode={USER_MODE_SIGN_IN}></SignInOrSignUpScreen>
            : <div>This will be replacd by main screen</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    userInfo: state.userSignIn.userInfo
});

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps) (HomeScreen);
