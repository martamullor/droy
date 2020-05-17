import React from 'react'
import '../../styles/loading-error.css'

export default class Error extends React.Component {
  render () {
    return (
      <div className='error-container'>
        <h2 className='error-title'>An error occurred</h2>
      </div>
    )
  }
}
