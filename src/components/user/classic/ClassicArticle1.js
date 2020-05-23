import React, { Component } from 'react'
import PropTypes from 'prop-types'

const articleContainer = {
  padding: '30px 10px 30px 10px',
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
          <h1 style={Object.assign({}, titleArticle1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h1>
          <div style={containerArticle}>
            <p style={Object.assign({}, textArticle1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</p>
            <p style={Object.assign({}, textArticle1, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</p>
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
