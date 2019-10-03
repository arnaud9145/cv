import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'
function App() {
  return (
    <Router>
      <Route path='/' component={Main} />
    </Router>
  )
}

export default App
