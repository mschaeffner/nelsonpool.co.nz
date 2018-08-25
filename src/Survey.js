import React, { Component } from 'react'
import axios from 'axios'
import SurveyHeader from "./SurveyHeader"
import SurveyBody from "./SurveyBody"
import SurveyEnd from "./SurveyEnd"


export default class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageNo: 0,
      complete: false
    }
  }

  onCurrentPageChanged(currentPageNo) {
    if(currentPageNo !== this.state.currentPageNo) {
      this.setState({currentPageNo})
    }
  }

  onComplete(data) {
    console.log(data)
    axios.post('https://pufjqdfx92.execute-api.eu-central-1.amazonaws.com/dev/survey', JSON.stringify(data))
    this.setState({complete: true, currentPageNo: 3})
  }

  render() {
    return (
      <div>
        <SurveyHeader currentPageNo={this.state.currentPageNo} />

        {!this.state.complete && <SurveyBody
          onCurrentPageChanged={(currentPageNo) => this.onCurrentPageChanged(currentPageNo)}
          onComplete={(data) => this.onComplete(data)}
        />}

        {this.state.complete && <SurveyEnd

        />}

      </div>
    )
  }
}
