import React, { Component } from 'react'
import MATCH_COMPONENTS from '../../utils/componentsMatching'
import PropTypes from 'prop-types'
import { withData } from '../../contexts/dataContext'
import OptionsBar from '../droy/OptionsBar'
import ModalChangeInfo from '../droy/ModalChangeInfo'
import { uuid } from 'uuidv4'
import '../../styles/user-componentBase.css'
import firebase from '../../services/firebase'

class UserComponentBase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      optionsModal: false,
      attributeSelected: '',
      attributeSelectedInfo: ''
    }
  }

  handleOpenModal = (e) =>{
    const { userLayoutObj, code  } = this.props
    const attrCode = e.target.attributes['data-id'].value
    this.setState({
      openChangeModal: true,
      attributeSelected: attrCode,
      attributeSelectedInfo: userLayoutObj.filter(c => c.code === code)[0].info[attrCode]
    })
  }

  handleCloseModal = () =>{
    this.setState({
      openChangeModal: false,
      attributeSelected: ''
    })
  }

  changeImage = async e => {
    const { projectId, code, saveComponentInfoToContext } = this.props
    const attr = e.target.attributes['data-id'].value
    const file = e.target.files[0]
    if(file.size > 20000){
      alert('Imagen demasiado grande.')
      return
    }
    const randomFileName = uuid()
    const storageRef = firebase.storage().ref(`/${firebase.auth().currentUser.uid}/${projectId}/${randomFileName}`)
    await storageRef.put(file)
    const downloadUrl = await storageRef.getDownloadURL()
    saveComponentInfoToContext(code, attr, {src: downloadUrl})
  }

  addLink = (e) => {
    const { code, saveComponentInfoToContext, userLayoutObj } = this.props
    const newUserLayoutObj = [...userLayoutObj]
    const targetComponentInfo = newUserLayoutObj.find(c => c.code === code).info
    const linksIds = [] 
    for (const key in targetComponentInfo) {
      if(targetComponentInfo[key].type !== 'link') continue
      linksIds.push(parseInt(key.match(/\d+$/)[0]))
    }
    if(linksIds.length > 5) return
    let newAttr = ''
    if(!linksIds.length) newAttr = 'Link1'
    else newAttr = `Link${Math.max(...linksIds)+1}`
    // Cambiar link por default a pagina de quienes somos de Droy
    const newInfo = { type: 'link', text: newAttr, href: 'http://www.google.es', toNewPage:true}
    saveComponentInfoToContext(code, newAttr, newInfo)
  }

  deleteLink = (e) => {
    const { code, saveComponentInfoToContext, userLayoutObj } = this.props
    const attr = e.target.attributes['data-id'].value
    saveComponentInfoToContext(code, attr, undefined)
  }

  render () {
    const { mode, moveComponent, componentType, code, deleteComponent, saveComponentInfoToContext, userLayoutObj  } = this.props
    const { attributeSelected, openChangeModal, attributeSelectedInfo } = this.state
    const UserComp = MATCH_COMPONENTS[code]
    const componentInfo = userLayoutObj.filter(c => c.code === code)[0].info
    const componentProps = {}
    if(mode === 'edit'){
      componentProps['openChangeModal'] = this.handleOpenModal
      componentProps['changeImage'] = this.changeImage
      if(componentType === "nav") {
        componentProps['deleteLink'] = this.deleteLink
        componentProps['addLink'] = this.addLink
      }
    }
    componentProps['info'] = componentInfo
    return (
      <div>
        <UserComp {...componentProps} mode={mode}>
          {mode === "edit" && <OptionsBar addLink={this.addLink} componentType={componentType} code={code} deleteComponent={deleteComponent} moveComponent={moveComponent}/>}
          {mode === "edit" && openChangeModal && <ModalChangeInfo info={attributeSelectedInfo} code={code} attributeSelected={attributeSelected} saveComponentInfoToContext={saveComponentInfoToContext} onClose={this.handleCloseModal}/>}
        </UserComp>
      </div>
    )
  }
}

UserComponentBase.propTypes = {
  code: PropTypes.string
}

export default withData(UserComponentBase)
