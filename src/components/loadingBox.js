import React, { Component } from 'react'
import {LOADING} from '../constants/loadingBoxConstant';

class LoadingBox extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
          <div class="spinner-grow" role="status">
            <span class="sr-only">{LOADING}</span>
          </div>
      </div>
    )
  }
}

export default LoadingBox;