import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import firebase from '../../services/firebase'

function PrivateRoute (props) {
  const { component: Comp, location, ...rest } = props
  return (
    <Route {...rest} render={
      (props) => firebase.auth().currentUser
        ? <Comp {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object,
  authLoading: PropTypes.bool
}

export default PrivateRoute
