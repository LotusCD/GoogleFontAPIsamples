import React, { Component } from 'react'


import TheNavBar from './NavBar/NavBar'
import FontList from './FontList/FontList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div className = "container-fluid">
      <TheNavBar/>
      <FontList/>
      </div>
    )
  }
}

export default App