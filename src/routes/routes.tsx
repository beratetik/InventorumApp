import React from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'

import RouteType from '../shared/types/RouteType'

interface RoutesProps {
  routes: RouteType[]
}

const Routes: React.FC<RoutesProps> = ({ routes }) => {

  const renderComponent = (props: any, route: RouteType) => {
    if (route.redirect) return <Redirect to={route.redirect} />

    return (
      <route.component
        {...props}
        {...route.props}
        {...route}
      />
    )
  }

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(props: RouteComponentProps<any>) => renderComponent(props, route)}
        />
      ))}
    </Switch>
  )
}

export default Routes
