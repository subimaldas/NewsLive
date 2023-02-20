import React, { Component } from 'react'
import loading from './loading.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" height='2px' width='2px'>
        <img src={loading} alt="loading..." />
      </div>
    )
  }
}

export default Spinner
