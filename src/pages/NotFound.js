import React, { Component } from 'react'
import '../styles/not-found.css'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render () {
    return (
      <div className="not-found">
        <p>Not found</p>
        <Link to="/"> <button>Return</button></Link>
      </div>
    )
  }
}
