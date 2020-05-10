import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import axios from 'axios'

const style = {
  height: '200px',
  backgroundColor: 'tomato'
}

class ClassicHeading1 extends Component {

  state = { selectedFile: null }

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  
  uploadHandler = () => {
    console.log(this.state.selectedFile)
  }

  uploadHandler = () => {
    axios.post('https://api.cloudinary.com/v1_1/dm99dkmlr/upload', this.state.selectedFile, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    })
  }

  render () {
    const { info, changeInfo, children: optionsBar } = this.props
    return (

      <div style={style}>
        { optionsBar }
        <input type="file" onChange={this.fileChangedHandler}/>
        <button onClick={this.uploadHandler}>Upload!</button>
        <Image
          dpr="auto"
          responsive
          responsiveUseBreakpoints="true"
          cloudName="dm99dkmlr"
          publicId="sample"
          style={{ width: '100%', height: '100%' }}>
          <Transformation effect="sepia" />
        </Image>
        In classic heading component
        <p data-id="text1" onDoubleClick={changeInfo}>{info.text1}</p>
        <p data-id="text2" onDoubleClick={changeInfo}>{info.text2}</p>
      </div>
    )
  }
}

ClassicHeading1.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  // children: PropTypes.object,
  code: PropTypes.string
}

export default ClassicHeading1
