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
    }
  }

  handleOpenModal = (e) =>{
    this.setState({
      openChangeModal: true,
      attributeSelected: e.target.attributes['data-id'].value
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
    saveComponentInfoToContext(code, attr, downloadUrl)
  }

  render () {
    const { mode, moveComponent , code, deleteComponent, saveComponentInfoToContext, userLayoutObj  } = this.props
    const { attributeSelected, openChangeModal } = this.state
    const UserComp = MATCH_COMPONENTS[code]
    const componentInfo = userLayoutObj.filter(c => c.code === code)[0].info
    const componentProps = {}
    if(mode === 'edit'){
      componentProps['openChangeModal'] = this.handleOpenModal
      componentProps['updateInfo'] = this.updateInfo
      componentProps['changeImage'] = this.changeImage
    }
    componentProps['info'] = componentInfo 
    return (
      <div className="user-component-base">
        <UserComp {...componentProps}>
          {mode === "edit" && <OptionsBar code={code} deleteComponent={deleteComponent} moveComponent={moveComponent}/>}
          {mode === "edit" && openChangeModal && <ModalChangeInfo oldText={componentInfo[attributeSelected]} code={code} attributeSelected={attributeSelected} saveComponentInfoToContext={saveComponentInfoToContext} onClose={this.handleCloseModal}/>}
        </UserComp>
      </div>
    )
  }
}

UserComponentBase.propTypes = {
  code: PropTypes.string
}

export default withData(UserComponentBase)
