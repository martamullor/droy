import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const timelineContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  padding: '0px 30px',
  backgroundColor: 'white',
  fontFamily: "'Caladea', serif"
}

const container4options = {
  display: 'flex',
  justifyContent: 'space-between'
}

const textSaleRateContainer = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#242424',
  fontFamily: "'Caladea', serif",
  margin: '0px 15px 30px 0px',
  padding: '30px',
  boxShadow: '-5px 4px 9px -1px rgba(225,225,225,1)',
  borderRadius: '5px',
  backgroundColor: 'white',
  flexGrow: '1'
}

const titleSection = {
  padding: ' 5px 30px',
  color: '#242424',
  textAlign: 'center'
}

const imageContainer = {
  width: '100px',
  padding: '10px 20px',
  borderRadius: '5px'
}

const imageInside = {
  width: '30px',
  marginRight: '10px'
}

const titleSection1 = {
  fontWeight: '800',
  maxWidth: '100%',
  overflow: 'hidden',
  color: '#30374d',
  textAlign: 'center'
}

const textSection = {
  color: '#242424',
  textAlign: 'center'
}

const textSection1 = {
  color: '#242424'
}

const containerSaleRate = {
  display: 'flex',
  color: '#2a2c2a',
  width: '100%',
  fontFamily: "'Caladea', serif",
  alignItems: 'center'
}

class ClassicSaleRate extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, timelineContainer, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</h1>
        <div style={container4options}>
          <div style={textSaleRateContainer}>
            <div style={imageContainer}>
              <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
            </div>
            <div>
              <h2 style={Object.assign({}, titleSection1, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
              <p style={Object.assign({}, textSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
              <div style={containerSaleRate}>
                <div style={imageInside}>
                  <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
                </div>
                <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
              </div>
              <div style={containerSaleRate}>
                <div style={imageInside}>
                  <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
                </div>
                <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
              </div>
              <div style={containerSaleRate}>
                <div style={imageInside}>
                  <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
                </div>
                <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
              </div>
            </div>
          </div>
          <div style={textSaleRateContainer}>
            <div style={imageContainer}>
              <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
            </div>
            <div>
              <h2 style={Object.assign({}, titleSection1, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
              <p style={Object.assign({}, textSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
            </div>
          </div>
          <div style={textSaleRateContainer}>
            <div style={imageContainer}>
              <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
            </div>
            <div>
              <h2 style={Object.assign({}, titleSection1, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
              <p style={Object.assign({}, textSection, info.text8.style)} data-id="text8" onDoubleClick={openChangeModal}>{info.text8.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, textSection1, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ClassicSaleRate.propTypes = {
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

export default ClassicSaleRate
