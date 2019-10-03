import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
function App() {
  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App
