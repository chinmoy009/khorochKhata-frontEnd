import React, { Component } from 'react'
import {MESSAGE_TYPE_DANGER, MESSAGE_TYPE_INFO, MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_WARNING} from '../constants/messageBoxConstant';

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: null
    }
  }  

  static getDerivedStateFromProps(props, state) {
      return {
          ...state,
          message: props.message,
          messageType: props.messageType
      }
  } 

  getCssClassBasedOnMessageType() {
      switch(this.state.messageType) {
          case MESSAGE_TYPE_SUCCESS:
              return "alert-success";
          case MESSAGE_TYPE_DANGER:
              return "alert-danger";
          case MESSAGE_TYPE_WARNING:
              return "alert-warning";
          case MESSAGE_TYPE_INFO:
              return "alert-info";
      }
  }


  render() {
    let messageSpecificCssClass = this.getCssClassBasedOnMessageType();
    return (
      <div class={`alert ${messageSpecificCssClass}`}>
          {this.state.message}
      </div>
    )
  }
}

export default MessageBox;
