import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.slim.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'
import { HashRouter } from 'react-router-dom'


import Nav from '../components/templates/Nav'
import Routes from '../routes/routes'
import Footer from '../components/templates/Footer'

export default props =>
  <HashRouter>
    <div className="app">
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>