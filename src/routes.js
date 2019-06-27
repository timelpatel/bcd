import React from 'react'
import { Route } from 'react-router-dom'
import AssetsPage from './component/page/assets/index.jsx'
import BehavioursPage from './component/page/behaviours/index.jsx'
import ComponentsPage from './component/page/components/index.jsx'
import GettingStartedPage from './component/page/getting-started/index.jsx'
import HomePage from './component/page/home/index.jsx'

const Routes = () => (
  <React.Fragment>
    <Route
      component={HomePage}
      exact
      path='/'
    />

    <Route
      component={AssetsPage}
      path='/assets'
    />

    <Route
      component={BehavioursPage}
      path='/behaviours'
    />

    <Route
      component={ComponentsPage}
      path='/components'
    />

    <Route
      component={GettingStartedPage}
      path='/getting-started'
    />
  </React.Fragment>
)

export default Routes
