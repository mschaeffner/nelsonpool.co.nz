import React, { Component } from 'react'
import Intro from "./Intro"
import Survey from "./Survey"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      started: false
    }
  }

  render() {
    if(this.state.started) {
      return <Survey />
    } else {
      return <Intro onStart={() => this.setState({started: true})} />
    }
  }
}
