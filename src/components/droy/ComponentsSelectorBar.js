import React, { Component } from 'react'
import { withData } from '../../contexts/dataContext'
import '../../styles/components-selectorBar.css'
import api from '../../services/apiClient'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
}

class ComponentsSelectorBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      styleComponents: [],
      status: STATUS.LOADING
    }
  }

  componentDidMount = async () => {
    try {
      const { projectStyle } = this.props
      const { data: styleComponents } = await api.get(`/components?style=${projectStyle}`)
      this.setState({ styleComponents, status: STATUS.LOADED, style: projectStyle })
    } catch (error) {
      this.setState({ status: STATUS.ERROR })
    }
  }

  showComponents = () => {
    const usedCompIds = this.props.userLayoutObj.map(c => c.code)
    const { styleComponents } = this.state
    return styleComponents.map(c => {
      const thumbnail = c.thumbnail
      if (!usedCompIds.includes(c.code)) {
        return (
          <div key={c.code} style={{ margin: '20px', backgroundImage:`url("${thumbnail.name}")`, backgroundRepeat: 'no-repeat', backgroundSize:'100%', height: thumbnail.height }}>
            <button data-code={c.code} onClick={this.handleAddComponent}>Add</button>
            
          </div>)
      }
      return (<div key={c.code} style={{ margin: '20px',  opacity:'0.3', backgroundImage:`url("${thumbnail.name}")`, backgroundRepeat: 'no-repeat', backgroundSize:'100%', height: thumbnail.height }}>
        {c.code}
      </div>)
    })
  }

  handleAddComponent = (e) => {
    const { addComponent } = this.props
    const code = e.target.attributes['data-code'].value
    const defaultInfo = this.state.styleComponents.filter(c => c.code === code)[0].defaultConfig
    addComponent(code, defaultInfo)
  }

  showContent = () => {
    const { status } = this.state
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return this.showComponents()
      case STATUS.ERROR:
        return <div>Error</div>
      default:
        break;
    }
  }

  render() {
    return (
      <div className='components-bar'>
        <h2 className='title-component-bar'>Components:</h2>
        {this.showContent()}
      </div>
    )
  }
}

export default withData(ComponentsSelectorBar)