import React, { Component } from 'react'
import PropTypes from 'prop-types'

const articleContainer = {
  padding: '30px 40px 8px 80px',
  position: 'relative',
  fontFamily: "'Caladea', serif",
  backgroundColor: '#edecdf'
}

const textArticleContainer = {
  textAlign: 'center',
  overflow: 'hidden',
  color: '#2a2c2a'
}

const containerArticle = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center'
}

const titleArticle1 = {
  fontWeight: '400',
  maxWidth: '100%',
  overflow: 'hidden'
}

const textArticle1 = {
  fontSize: '1rem',
  fontWeight: '200',
  maxWidth: '100%',
  overflow: 'hidden',
  textAlign: 'left',
  padding: '5px 55px',
  flexGrow: '1'
}

class ClassicArticle1 extends Component {
  render () {
    const { userStyle, info, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, articleContainer, userStyle)}>
        {optionsBar}
        <div style={textArticleContainer}>
          <h1 style={Object.assign({}, titleArticle1, info.text4.style)} data-id="text4" onDoubleClick={openChangeModal}>{info.text4.text}</h1>
          <div style={containerArticle}>
            <p style={Object.assign({}, textArticle1, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</p>
            <p style={Object.assign({}, textArticle1, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

ClassicArticle1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicArticle1
