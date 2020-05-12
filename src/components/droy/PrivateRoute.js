import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withAuth } from '../../contexts/authContext'

function PrivateRoute (props) {
  const { authLoading, isLoggedIn, component: Comp, location, ...rest } = props
  if (authLoading) return <div></div> // It's good????
  return (
    <Route {...rest} render={
      (props) => isLoggedIn
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

export default withAuth(PrivateRoute)
