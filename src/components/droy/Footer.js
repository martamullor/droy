import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer-container'>
        <h4>Contact</h4>
        <ul>
          <li>Email:</li>
          <li><Link>Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Footer
