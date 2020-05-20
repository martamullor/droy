import React, { Component } from 'react'
import MATCH_COMPONENTS from '../../utils/componentsMatching'
import PropTypes from 'prop-types'
import { withData } from '../../contexts/dataContext'
import OptionsBar from '../droy/OptionsBar'
import ModalChangeInfo from '../droy/ModalChangeInfo'
import { uuid } from 'uuidv4'
import '../../styles/user-componentBase.css'
import firebase from '../../services/firebase'

/* Provides all the funcions to manage all component content and style */
class UserComponentBase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      optionsModal: false,
      attributeSelected: '',
      attributeSelectedInfo: '',
      attributeSelectedStyle: ''
    }
  }
  
  /* Opens the editor modal setting the target to the state */
  handleOpenModal = (e) =>{
    const { userLayoutObj, code  } = this.props
    const attrCode = e.target.attributes['data-id'].value
    this.setState({
      openChangeModal: true,
      attributeSelected: attrCode,
      attributeSelectedInfo: userLayoutObj.find(c => c.code === code).info[attrCode],
      attributeSelectedStyle: userLayoutObj.find(c => c.code === code).style[attrCode]
    })
  }

  /* Close the editor modal */
  handleCloseModal = () =>{
    this.setState({
      openChangeModal: false,
      attributeSelected: '',
      attributeSelectedInfo: '',
      attributeSelectedStyle: ''
    })
  }
  
  /* Uploads the recived image to Firebase Storage and updates the context */
  changeImage = async (e) => {
    const { projectId, code, saveComponentInfoToContext } = this.props
    const attr = e.target.attributes['data-id'].value
    const file = e.target.files[0]
    if(file.size > 20000){
      alert('Imagen demasiado grande.')
    } else {
      const randomFileName = uuid()
      const storageRef = firebase.storage().ref(`/${firebase.auth().currentUser.uid}/${projectId}/${randomFileName}`)
      await storageRef.put(file)
      const downloadUrl = await storageRef.getDownloadURL()
      saveComponentInfoToContext(code, attr, { src: downloadUrl })
    }
  }

  /* Ads a new link in the target component and updates the context */
  addLink = () => {
    const { code, saveUserComponentStyleInfoToContext, saveComponentInfoToContext, userLayoutObj } = this.props
    const targetComponentInfo = userLayoutObj.find(c => c.code === code).info
    const linksIds = [] 
    for (const key in targetComponentInfo) {
      if(targetComponentInfo[key].type !== 'link') continue
      linksIds.push(parseInt(key.match(/\d+$/)[0]))
    }
    if(linksIds.length >= 5) return
    let newAttr = ''
    if(!linksIds.length) newAttr = 'link1'
    else newAttr = `link${Math.max(...linksIds)+1}`
    // Cambiar link por default a pagina de quienes somos de Droy
    const newInfo = {style:{fontSize: '1rem'}, type: 'link', text: "New link", href: 'http://www.google.es', toNewPage:true}
    saveComponentInfoToContext(code, newAttr, newInfo)
  }

  /* Deletes the target link in the target component and updates the context */
  deleteLink = (e) => {
    const { code, saveComponentInfoToContext } = this.props
    const { attributeSelected } = this.state
    saveComponentInfoToContext(code, attributeSelected, undefined)
    this.handleCloseModal()
  }

  /* Recieves the new text info to set to the target component and updates the context */
  changeInfo = (info) => {
    const { attributeSelected } = this.state
    const { code, saveComponentInfoToContext } = this.props
    saveComponentInfoToContext(code, attributeSelected, info)
    this.handleCloseModal()
  }

  /* Recieves the color HEX to set to the target componetn and updates de context */
  changeColor = (color) => {
    const { code, saveUserComponentStyleInfoToContext } = this.props
    saveUserComponentStyleInfoToContext(code, {backgroundColor: color})
  }

  /* Uploads the recived image to Firebase Storage and updates the context */
  changeBackgroundImage = async (e) => {
    const { projectId, code, saveUserComponentStyleInfoToContext } = this.props
    const file = e.target.files[0]
    if(file.size > 20000){
      alert('Imagen demasiado grande.')
    } else {
      const randomFileName = uuid()
      const storageRef = firebase.storage().ref(`/${firebase.auth().currentUser.uid}/${projectId}/${randomFileName}`)
      await storageRef.put(file)
      const downloadUrl = await storageRef.getDownloadURL()
      saveUserComponentStyleInfoToContext(code, {backgroundImage: `url("${downloadUrl}")`})
    }
  } 

  /* Gets the real React components and pass new funcionalities */
  render () {
    const { mode, moveComponent, componentOptions, code, deleteComponent, userLayoutObj  } = this.props
    const { attributeSelected, openChangeModal, attributeSelectedInfo, attributeSelectedStyle } = this.state
    const UserComp = MATCH_COMPONENTS[code]
    const { info: componentInfo, style: contentStyle, componentUserOverrideStyle: userStyle } = userLayoutObj.find(c => c.code === code)
    const componentProps = {}
    if(mode === 'edit'){
      componentProps['openChangeModal'] = this.handleOpenModal
      componentProps['changeImage'] = this.changeImage
      if(componentOptions.includes('backgroundColor')) componentProps['addLink'] = this.addLink
    }
    componentProps['info'] = componentInfo
    componentProps['contentStyle'] = contentStyle
    componentProps['userStyle'] = userStyle
    return (
      <UserComp {...componentProps} mode={mode}>
        {mode === "edit" && <OptionsBar changeColor={this.changeColor} addLink={this.addLink} componentOptions={componentOptions} code={code} deleteComponent={deleteComponent} moveComponent={moveComponent} changeBackgroundImage={this.changeBackgroundImage}/>}
        {mode === "edit" && openChangeModal && <ModalChangeInfo deleteLink={this.deleteLink} info={attributeSelectedInfo} style={attributeSelectedStyle} code={code} attributeSelected={attributeSelected} changeInfo={this.changeInfo} onClose={this.handleCloseModal}/>}
      </UserComp>
    )
  }
}

UserComponentBase.propTypes = {
  code: PropTypes.string
}

export default withData(UserComponentBase)
