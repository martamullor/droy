import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withAuth } from '../../contexts/authContext'

function OnlyNotLoggedRoute (props) {
  const { authLoading, isLoggedIn, component: Comp, location, ...rest } = props
  if (authLoading) return <div></div> // It's good????
  return (
    <Route {...rest} render={
      (props) => isLoggedIn
        ? <Redirect to={{ pathname: '/', state: { from: location } }} />
        : <Comp {...props} />
    }
    />
  )
}

OnlyNotLoggedRoute.propTypes = {
  component: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.string,
  authLoading: PropTypes.bool
}

export default withAuth(OnlyNotLoggedRoute)
