import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import firebase from '../../services/firebase'

function OnlyNotLoggedRoute (props) {
  const { component: Comp, location, ...rest } = props
  return (
    <Route {...rest} render={
      (props) => firebase.auth().currentUser
        ? <Redirect to={{ pathname: '/', state: { from: location } }} />
        : <Comp {...props} />
    }
    />
  )
}

OnlyNotLoggedRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
}

export default OnlyNotLoggedRoute
