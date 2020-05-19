import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../services/apiClient'

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
    const stateCopy = { ...this.state }
    const { userLayoutObj } = stateCopy
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
    const stateCopy = { ...this.state }
    const { userLayoutObj } = stateCopy
    let fromIndex = 0; let element
    for (let i = 0; i < userLayoutObj.length; i++) {
      const c = userLayoutObj[i];
      if (c.code === elementCode) {
        element = c; fromIndex = i; break
      }
    }
    userLayoutObj.splice(fromIndex, 1)
    if (direction === 'down') userLayoutObj.splice(fromIndex + 1, 0, element)
    else if (direction === 'up') userLayoutObj.splice(fromIndex - 1, 0, element)
    this.setState({ userLayoutObj: userLayoutObj })
  }

  /* Add new component to actual configurarion */
  addComponent = (componentCode, defaultInfo, componentType) => {
    const stateCopy = {...this.state}
    stateCopy.userLayoutObj.push({
      code: componentCode,
      info: defaultInfo,
      componentType: componentType
    })
    this.setState({
      userLayoutObj: stateCopy.userLayoutObj,
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
    const stateCopy = {...this.state}
    const { userLayoutObj } = stateCopy
    const component = userLayoutObj.find(userObject => userObject.code === componentCode)
    if (attrContent) component.info[componentAttr] = attrContent
    else delete component.info[componentAttr]
    this.setState({
      userLayoutObj: userLayoutObj
    })
  };

  /* Update style configuration and rerender with it */
  saveUserComponentStyleInfoToContext = (componentCode, newStylePair) => {
    const stateCopy = {...this.state}
    const component = stateCopy.userLayoutObj.find(userObject => userObject.code === componentCode)
    if (!component.componentUserOverrideStyle) component.componentUserOverrideStyle = newStylePair
    else Object.assign(component.componentUserOverrideStyle, newStylePair)
    this.setState({
      userLayoutObj: stateCopy.userLayoutObj
    })
  }

  /* Get project info to BBDD based on the project ID */
  getProjectInfo = async (projectId) => {
    try {
      const { data: { componentsConfiguration, style, _id } } = await api.get(`/projects/${projectId}`)
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
        saveComponentInfoToContext: this.saveComponentInfoToContext,
        getProjectInfo: this.getProjectInfo,
        switchMode: this.switchMode,
        moveComponent: this.moveComponent,
        addComponent: this.addComponent,
        deleteComponent: this.deleteComponent,
        save: this.save,
        saveUserComponentStyleInfoToContext: this.saveUserComponentStyleInfoToContext,
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
