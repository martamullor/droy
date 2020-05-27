import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const classicBlogContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '0px 50px',
  backgroundColor: '#edecdf',
  fontFamily: "'Caladea', serif"
}

const containerBlog = {
  display: 'flex'
}

const twoBlogSections = {
  margin: '10px 20px',
  width: '50%'
}

const textBlogContainer = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#242424',
  maxWidth: '90%',
  fontFamily: "'Caladea', serif",
  margin: '0px 5px 30px 0px',
  padding: '30px',
  boxShadow: '-5px 4px 9px -1px rgba(225,225,225,1)',
  borderRadius: '5px',
  backgroundColor: 'white'

}

const titleSection = {
  padding: ' 5px 30px',
  color: '#242424',
  textAlign: 'center',
  maxHeight: '40px',
  overflow: 'hidden'
}

const imageContainer = {
  width: '100%',
  padding: '10px 20px',
  borderRadius: '5px'
}

const subtitleSection = {
  fontWeight: '800',
  maxWidth: '100%',
  overflow: 'hidden',
  color: '#30374d',
  maxHeight: '25px'
}

const textSection = {
  color: '#242424',
  maxHeight: '60px',
  overflow: 'hidden'
}

class ClassicBlog extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, classicBlogContainer, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</h1>
        <div style={containerBlog}>
          <div style={twoBlogSections}>
            <div style={textBlogContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
                <p style={Object.assign({}, textSection, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
              </div>
            </div>
            <div style={textBlogContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
                <p style={Object.assign({}, textSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
              </div>
            </div>
          </div>
          <div style={twoBlogSections}>
            <div style={textBlogContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
                <p style={Object.assign({}, textSection, info.text8.style)} data-id="text8" onDoubleClick={openChangeModal}>{info.text8.text}</p>
              </div>
            </div>
            <div style={textBlogContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image4" src={info.image4.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text4.style)} data-id="text4" onDoubleClick={openChangeModal}>{info.text4.text}</h2>
                <p style={Object.assign({}, textSection, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ClassicBlog.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  code: PropTypes.string,
  userStyle: PropTypes.object,
  changeImage: PropTypes.func,
  openChangeModal: PropTypes.func
}

export default ClassicBlog
