import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from '../../../services/firebase'
const { uuid } = require('uuidv4');

const style = {
  height: '200px',
  backgroundColor: 'tomato'
}

class ClassicHeading1 extends Component {

  state = { selectedFile: null,  image1: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'}

  fileChangedHandler = e => {
    const file = e.target.files[0]
    // poner dentro de carpeta usuario y proyecto
    // asi cuando borramos proyecto, borramos carpeta bucket
    const storageRef = firebase.storage().ref(`${uuid()}`)
    if(file.size > 20000){
      alert('Imagen demasiado grande. Elige una mas pequeña o hazle un resize')
      return
    }
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      // ir enseñando progreso en front y bloquearlo de mientras
      console.log(111, percentage)
    }, (error) => {
      console.error(2222, error.message)
    }, async () => {
      const downloadUrl = await task.snapshot.ref.getDownloadURL()
      this.setState({image1: downloadUrl})
    })
    
  }
  
  uploadHandler = () => {
    this.refs.imageUploader.click();
  }


  render () {
    const { info, changeInfo, children: optionsBar } = this.props
    return (

      <div style={style}>
        { optionsBar }
        <input style={{display: 'none'}} onChange={this.fileChangedHandler} ref="imageUploader" type="file" name="image" id="image"/>
        <img onDoubleClick={this.uploadHandler} src={this.state.image1} alt="" style={{width: '100%', height: '100%'}}/>
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
