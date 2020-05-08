import React, { Component } from 'react'
import MATCH_COMPONENTS from '../../utils/componentsMatching'
import PropTypes from 'prop-types'
import { withData } from '../../contexts/dataContext'
import OptionsBar from '../droy/OptionsBar'

class UserComponentBase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {...this.props.info},
      code: this.props.code,
    }
  }

  changeInfo = (e) => {
    const { info, code } = this.state
    console.log(code, e.target.id)
    const newText = prompt('Inserta el nuevo texto')
    const newInfo = {...info}
    const attr = e.target.id
    newInfo[attr] = newText

    this.setState({ info: newInfo })
  }
  
  componentDidUpdate = () => {
    const { saveComponentInfoToContext } = this.props
    const { info, code } = this.state
    saveComponentInfoToContext(info, code)
  }

  render () {
    const { mode, moveDownComponent } = this.props
    const { code } = this.state
    const UserComp = MATCH_COMPONENTS[code]
    return (
      <div>
        { mode === "edit"
          ? <UserComp changeInfo={this.changeInfo} updateInfo={this.updateInfo} {...this.state }>
              <OptionsBar code={code} moveDownComponent={moveDownComponent} />
            </UserComp>
          : <UserComp {...this.state }/>
        }
      </div>
    )
  }
}

UserComponentBase.propTypes = {
  code: PropTypes.string
}

export default withData(UserComponentBase)