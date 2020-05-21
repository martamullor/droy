import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../services/apiClient'
import alias from '../utils/alias'

const DataContext = React.createContext()

export const withData = (Comp) => {
  return class WithData extends Component {
    render() {
      return (
        <DataContext.Consumer>
          {(props) => <Comp {...this.props} {...props} />}
        </DataContext.Consumer>
      )
    }
  }
}

class DataProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'edit',
      userLayoutObj: [],
      projectStyle: "",
      projectId: "",
      dataError: "",
      savingStep: 'Save',
    }
  }

  /* Switch between edit/view modes */
  switchMode = () => {
    const { mode } = this.state
    this.setState({
      mode: mode === 'edit' ? 'view' : 'edit'
    })
  }

  /* Delete component from main layout */
  deleteComponent = (elementCode) => {
    const { userLayoutObj } = alias.copyObject(this.state)
    let fromIndex = 0;
    for (let i = 0; i < userLayoutObj.length; i++) {
      const c = userLayoutObj[i];
      if (c.code !== elementCode) continue
      fromIndex = i
      break
    }
    userLayoutObj.splice(fromIndex, 1)
    this.setState({ userLayoutObj: userLayoutObj })
  }

  /* Move component position from main layout */
  moveComponent = (elementCode, direction) => {
    const { userLayoutObj } = alias.copyObject(this.state)
    let fromIndex = 0
    let element
    for (let i = 0; i < userLayoutObj.length; i++) {
      const c = userLayoutObj[i];
      if (c.code === elementCode) {
        element = c
        fromIndex = i
        break
      }
    }
    userLayoutObj.splice(fromIndex, 1)
    if (direction === 'down') userLayoutObj.splice(fromIndex + 1, 0, element)
    else if (direction === 'up') userLayoutObj.splice(fromIndex - 1, 0, element)
    this.setState({ userLayoutObj: userLayoutObj })
  }

  /* Add new component to actual configurarion */
  addComponent = (componentCode, defaultInfo, componentOptions, componentStyle) => {
    const { userLayoutObj } = alias.copyObject(this.state)
    let firstStyle = {}
    for (const attr in defaultInfo) {
      firstStyle = Object.assign(firstStyle, {[attr]: defaultInfo[attr].style})
    }
    let firstUserOverrideStyle = {}
    for (const attr in componentStyle) {
      firstUserOverrideStyle = Object.assign(firstUserOverrideStyle, {[attr]: componentStyle[attr]})
    }
    userLayoutObj.push({
      code: componentCode,
      info: defaultInfo,
      style: firstStyle,
      componentOptions,
      componentUserOverrideStyle: firstUserOverrideStyle
    })
    this.setState({
      userLayoutObj: userLayoutObj,
    })
  }

  /* Save actual user configuration to BBDD */
  save = async (projectId) => {
    try {
      this.setState({ savingStep: 'Saving...' })
      const { userLayoutObj } = this.state
      await api.put(`/projects/${projectId}`, { componentsConfiguration: userLayoutObj })
      setTimeout(() => {
        this.setState({ savingStep: 'OK' })
        setTimeout(() => { this.setState({ savingStep: 'Save' }) }, 500);
      }, 500);
    } catch (error) {
      alert("Error al guardar. Vuelve a intentarlo")
    }   
  }

  /* Update content configuration and rerender with it */
  saveComponentInfoToContext = (componentCode, componentAttr, attrContent) => {
    const layoutCopy = alias.copyArray(this.state.userLayoutObj)
    const component = alias.findByCode(layoutCopy, componentCode)
    const styleOptions = ['fontSize', 'letterSpacing']
    let componentStyles = component.style
    if(!attrContent) delete component.info[componentAttr]
    else {
      component.info[componentAttr] = attrContent
      let stylesAttr = {}
      for (const option in attrContent.style) {
        if (!styleOptions.includes(option)) continue
        stylesAttr = {...stylesAttr, [option]: attrContent.style[option]}
        componentStyles = Object.assign(componentStyles, {[componentAttr]: stylesAttr})
      }
    }
    component.style = componentStyles
    this.setState({ userLayoutObj: layoutCopy })
  };

  /* Update style configuration and rerender with it */
  saveUserComponentStyleInfoToContext = (componentCode, newStylePair) => {
    const { userLayoutObj } = alias.copyObject(this.state)
    const component = alias.findByCode(userLayoutObj, componentCode)
    if (!component.componentUserOverrideStyle) component.componentUserOverrideStyle = newStylePair
    else Object.assign(component.componentUserOverrideStyle, newStylePair)
    this.setState({
      userLayoutObj: userLayoutObj
    })
  }

  /* Get project info to BBDD based on the project ID */
  getProjectInfo = async (projectId) => {
    try {
      const { data: { componentsConfiguration, style, _id } } = await api.get(`/projects/${projectId}`)
      let firstStyle = {}
      for (const key in componentsConfiguration) {
        const component = componentsConfiguration[key]
        const componentInfo = component.info
        for (const attr in componentInfo) {
          firstStyle = Object.assign(firstStyle, {[attr]: componentInfo[attr].style})
        }
        component.style = firstStyle
      }
      this.setState({
        projectId: _id,
        userLayoutObj: componentsConfiguration,
        projectStyle: style,
      })
    } catch (error) {
      this.setState({ dataError: "Unable to get your project data" })
    }
  }

  render () {
    const { children } = this.props
    return (
      <DataContext.Provider value={{
        saveUserComponentStyleInfoToContext: this.saveUserComponentStyleInfoToContext,
        saveComponentInfoToContext: this.saveComponentInfoToContext,
        deleteComponent: this.deleteComponent,
        getProjectInfo: this.getProjectInfo,
        moveComponent: this.moveComponent,
        addComponent: this.addComponent,
        switchMode: this.switchMode,
        save: this.save,
        ...this.state
      }}>
        {children}
      </DataContext.Provider>
    )
  }
}

DataProvider.propTypes = {
  children: PropTypes.node
}

export default DataProvider
