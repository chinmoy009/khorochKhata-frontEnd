import React, { Component } from 'react'
import {connect} from 'react-redux';
import lodash from 'lodash';

class LandingScreen extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
          
      </div>
    )
  }
}

const mapStateToProps = state => ({
    userSignIn: state.userSignIn
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps) (LandingScreen);
