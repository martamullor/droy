import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const SaleRateContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  padding: '0px 30px',
  backgroundColor: 'white',
  fontFamily: "'Caladea', serif"
}

const saleRateContainerOptions = {
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
  flexGrow: '1',
  maxWidth: '33%',
  overflow: 'hidden'
}

const titleSection = {
  padding: ' 5px 30px',
  color: '#242424',
  textAlign: 'center',
  maxWidth: '80vw',
  overflow: 'hidden',
  height: '70px'
}

const imageContainer = {
  width: '100px',
  padding: '10px 20px',
  borderRadius: '5px',
  overflow: 'hidden',
  maxHeight: '198px'
}

const imageInside = {
  width: '40px',
  marginRight: '10px',
  overflow: 'hidden',
  maxHeight: '40px'
}

const image = {
  maxWidth: '20px',
  maxHeight: '20px'
}

const subtitleSection = {
  fontWeight: '800',
  maxWidth: '300px',
  overflow: 'hidden',
  color: '#97a68f',
  textAlign: 'center'
}

const subtitletextSection = {
  color: '#242424',
  textAlign: 'center',
  maxWidth: '300px',
  overflow: 'hidden',
  maxHeight: '50px'
}

const pointSection = {
  color: '#242424'
}

const containerSaleRate = {
  display: 'flex',
  color: '#2a2c2a',
  fontFamily: "'Caladea', serif",
  alignItems: 'center',
  maxWidth: '300px',
  overflow: 'hidden'
}

class ClassicSaleRate extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, SaleRateContainer, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</h1>
        <div style={saleRateContainerOptions}>
          <div style={textSaleRateContainer}>
            <div style={imageContainer}>
              <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
            </div>
            <div>
              <h2 style={Object.assign({}, subtitleSection, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
              <p style={Object.assign({}, subtitletextSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
              <div style={containerSaleRate}>
                <div style={imageInside}>
                  <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
                </div>
                <p style={Object.assign({}, pointSection, info.text11.style)} data-id="text11" onDoubleClick={openChangeModal}>{info.text11.text}</p>
              </div>
              <div style={containerSaleRate}>
                <div style={imageInside}>
                  <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
                </div>
                <p style={Object.assign({}, pointSection, info.text12.style)} data-id="text12" onDoubleClick={openChangeModal}>{info.text12.text}</p>
              </div>
              <div style={containerSaleRate}>
                <div style={imageInside}>
                  <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
                </div>
                <p style={Object.assign({}, pointSection, info.text13.style)} data-id="text13" onDoubleClick={openChangeModal}>{info.text13.text}</p>
              </div>
            </div>
          </div>
          <div style={textSaleRateContainer}>
            <div style={imageContainer}>
              <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
            </div>
            <div>
              <h2 style={Object.assign({}, subtitleSection, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
              <p style={Object.assign({}, subtitletextSection, info.text10.style)} data-id="text10" onDoubleClick={openChangeModal}>{info.text10.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, pointSection, info.text14.style)} data-id="text14" onDoubleClick={openChangeModal}>{info.text14.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, pointSection, info.text15.style)} data-id="text15" onDoubleClick={openChangeModal}>{info.text15.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, pointSection, info.text16.style)} data-id="text16" onDoubleClick={openChangeModal}>{info.text16.text}</p>
            </div>
          </div>
          <div style={textSaleRateContainer}>
            <div style={imageContainer}>
              <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
            </div>
            <div>
              <h2 style={Object.assign({}, subtitleSection, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
              <p style={Object.assign({}, subtitletextSection, info.text8.style)} data-id="text8" onDoubleClick={openChangeModal}>{info.text8.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, pointSection, info.text17.style)} data-id="text17" onDoubleClick={openChangeModal}>{info.text17.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, pointSection, info.text18.style)} data-id="text18" onDoubleClick={openChangeModal}>{info.text18.text}</p>
            </div>
            <div style={containerSaleRate}>
              <div style={imageInside}>
                <ImageEditable style={image} data-id="image5" src={info.image5.src} changeImage={changeImage} />
              </div>
              <p style={Object.assign({}, pointSection, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
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
