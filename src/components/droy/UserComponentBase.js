import React, { Component } from 'react'
import MATCH_COMPONENTS from '../../utils/componentsMatching'
import PropTypes from 'prop-types'
import { withData } from '../../contexts/dataContext'
import { withAuth } from '../../contexts/authContext'
import OptionsBar from '../droy/OptionsBar'
import firebase from '../../services/firebase'
import { uuid } from 'uuidv4'
import '../../styles/user-componentBase.css'

class UserComponentBase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imChanged: false
    }
  }

  changeInfo = (e) => {
    const { code, saveComponentInfoToContext } = this.props
    const newText = prompt('Inserta el nuevo texto')
    const attr = e.target.attributes['data-id'].value
    this.setState({ imChanged: true })
    saveComponentInfoToContext(code, attr, newText)
  }

  changeImage = e => {
    const { projectId, code, saveComponentInfoToContext, user } = this.props
    const attr = e.target.attributes['data-id'].value
    const file = e.target.files[0]
    // TODO, cuando borramos proyecto, borramos carpeta bucket para ese proyecto
    const storageRef = firebase.storage().ref(`/${user.email}/${projectId}/${uuid()}`)
    if(file.size > 20000){
      alert('Imagen demasiado grande. Elige una mas pequeña o hazle un resize')
      return
    }
    const task = storageRef.put(file)
    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      // TODO, ir enseñando progreso en front y bloquearlo todo de mientras
      console.log(111, percentage)
    }, (error) => {
      console.error(2222, error.message)
    }, async () => {
      const downloadUrl = await task.snapshot.ref.getDownloadURL()
      saveComponentInfoToContext(code, attr, downloadUrl)
    }) 
  }
  


  getComponentInfo = () => {
    const { userLayoutObj, code } = this.props
    return userLayoutObj.filter(c => c.code === code)[0].info
  }

  /* Causa que no funcione tema imagenes por la asincronia de carga... De momento comentar
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.mode !== this.props.mode) return true
    if(!nextState.imChanged) return false
    this.setState({ imChanged: false })
    return true
  } */
  
  
  render () {
    const { mode, moveComponent , code, deleteComponent  } = this.props
    const UserComp = MATCH_COMPONENTS[code]
    const componentProps = { info: this.getComponentInfo() }
    if(mode === 'edit'){
      componentProps['changeInfo'] = this.changeInfo
      componentProps['updateInfo'] = this.updateInfo
      componentProps['changeImage'] = this.changeImage
    }
    return (
      <div className="user-component-base">
        <UserComp {...componentProps}>
          {mode === "edit" && <OptionsBar code={code} deleteComponent={deleteComponent} moveComponent={moveComponent}/>}
        </UserComp>
      </div>
    )
  }
}

UserComponentBase.propTypes = {
  code: PropTypes.string
}

export default withAuth(withData(UserComponentBase))