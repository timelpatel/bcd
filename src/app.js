import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.js'
import Header_Footer__Header from './component/module/header-footer/header'
import Header_Footer__Footer from './component/module/header-footer/footer'

const App = () => (
  <React.Fragment>
    <Header_Footer__Header />
      <Routes />
    <Header_Footer__Footer />
  </React.Fragment>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
