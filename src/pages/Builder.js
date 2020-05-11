import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'
import '../styles/builder.css'


class Builder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userLayoutObj: [],
    }
  }

  componentDidMount () {
    // db petition
    const { copyUserLayoutObjToContext } = this.props
    const userApiInfo = [
      {
        code: 'ClassicHeading1',
        info: { text1: 'Link', text2: 'Link' }
      },
      {
        code: 'ClassicHome1',
        info: { text1: 'Full screen intro', text2: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
      }
    ]
    copyUserLayoutObjToContext(userApiInfo)
  }


  showComponents = () => {
    const { userLayoutObj } = this.props
    return userLayoutObj.map((c) => {
      return <UserComponentBase
          // moveDownComponent={this.moveDownComponent}
          code={c.code}
          key={c.code}/>
    })
  }

  render () {
    const { mode } = this.props
    return (
      <div>
        <NavBar withOptions/>
        <div className="main-builder">
          {mode === "edit" && <ComponentsSelectorBar/>}
          <div>
            {this.showComponents()}
          </div>
        </div>
      </div>
    )
  }
}

Builder.propTypes = {
  userLayoutObj: PropTypes.array,
  saveInfoToContext: PropTypes.func
}

export default withData(Builder)
