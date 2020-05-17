import React, { Component } from 'react'
import '../styles/not-found.css'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render () {
    return (
      <div className="not-found">
        <h2 className='title-not-found'>Error 404</h2>
        <p className='subtitle-not-found'>Page not found</p>
        <Link to="/"><button className='button-not-found'>Go to Homepage</button></Link>
      </div>
    )
  }
}
