import React, { Component } from 'react'
import MATCH_COMPONENTS from '../../utils/componentsMatching'
import PropTypes from 'prop-types'
import { withData } from '../../contexts/dataContext'
import OptionsBar from '../droy/OptionsBar'
import '../../styles/user-componentBase.css'

class UserComponentBase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imChanged: false
      /*
      info: {...this.props.info},
      code: this.props.code, */
    }
  }

  changeInfo = (e) => {
    const { code } = this.props
    const { saveComponentInfoToContext } = this.props
    const newText = prompt('Inserta el nuevo texto')
    const attr = e.target.attributes['data-id'].value
    this.setState({ imChanged: true })
    saveComponentInfoToContext(code, attr, newText)
  }


  getComponentInfo = () => {
    const { userLayoutObj, code } = this.props
    return userLayoutObj.filter(c => c.code === code)[0].info
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.mode !== this.props.mode) return true
    // if(nextProps.userLayoutObj.length !== this.props.userLayoutObj.length) return true
    if(!nextState.imChanged) return false
    this.setState({ imChanged: false })
    return true
  }
  
  
  render () {
    const { mode, moveDownComponent, code, deleteComponent  } = this.props
    const UserComp = MATCH_COMPONENTS[code]
    const componentProps = { info: this.getComponentInfo() }
    if(mode === 'edit'){
      componentProps['changeInfo'] = this.changeInfo
      componentProps['updateInfo'] = this.updateInfo
    }
    return (
      <div className="user-component-base">
        <UserComp {...componentProps}>
          {mode === "edit" && <OptionsBar code={code} deleteComponent={deleteComponent} moveDownComponent={moveDownComponent}/>}
        </UserComp>
      </div>
    )
  }
}

UserComponentBase.propTypes = {
  code: PropTypes.string
}

export default withData(UserComponentBase)