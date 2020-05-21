import React, { Component } from 'react'
import { withData } from '../contexts/dataContext'
import PropTypes from 'prop-types'
import UserComponentBase from '../components/droy/UserComponentBase'
import ComponentsSelectorBar from '../components/droy/ComponentsSelectorBar'
import NavBar from '../components/droy/NavBar'
import Loading from '../components/droy/Loading'
import '../styles/builder.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  // a little function to help us with reordering the result
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  onDragEnd = (result) => {
    const { userLayoutObj, updateOrder } = this.props
    if (result.destination) {
      const items = this.reorder(
        userLayoutObj,
        result.source.index,
        result.destination.index
      )
      updateOrder(items)
    }
  }

  /* Updates data context with the actual project information */
  componentDidMount = async () => {
    const { match, getProjectInfo } = this.props
    await getProjectInfo(match.params.projectId)
    this.setState({ isLoading: false })
  }

  /* Loops over project info in data context to print user components */
  /* If not components found, prints a pretty message */
  showUserComponents = () => {
    const { userLayoutObj, dataError } = this.props
    if (!userLayoutObj.length) return (
      <div className='empty-component-base'>
        <img className='image-emptyBuilder' src='/img/empty-icon.png' alt='empty-icon' />
        <p className='text-noComponents'>Start picking one component from the left!</p>
      </div>)
    if (dataError) return <div>{dataError}</div>

    const allComponents = []
    if (this.props.mode === 'edit') {
      let i = 0
      for (const c of userLayoutObj) {
        allComponents.push(
          <Draggable key={c.code} draggableId={c.code} index={i}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <UserComponentBase componentStyle={c.componentStyle} componentOptions={c.componentOptions} code={c.code} key={c.code} />
              </div>
            )}
          </Draggable>
        )
        i += 1
      }
      return (
        <Droppable key={i} droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {[...allComponents]}
              {provided.placeholder}
            </div>
          )}
        </Droppable>)
    } else {
      return userLayoutObj.map(c => {
        return <UserComponentBase componentStyle={c.componentStyle} componentOptions={c.componentOptions} code={c.code} key={c.code} />
      })
    }
  }

  render() {
    const { mode } = this.props
    const { isLoading } = this.state
    return (
      <div>
        <NavBar withOptions />
        <div className="main-builder">
          {isLoading && <div className='loading-container'><Loading /></div>}
          {!isLoading && mode === "edit" && <ComponentsSelectorBar />}
          <DragDropContext onDragEnd={this.onDragEnd}>
            {!isLoading && <div className="components-builder">{this.showUserComponents()}</div>}
          </DragDropContext>

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
