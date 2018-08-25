import React, { Component } from 'react'
import axios from 'axios'
import SurveyHeader from "./SurveyHeader"
import SurveyBody from "./SurveyBody"
import SurveyEmail from "./SurveyEmail"
import SurveyEnd from "./SurveyEnd"


export default class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageNo: 0,
      surveyState: 0
    }
  }

  onCurrentPageChanged(currentPageNo) {
    if(currentPageNo !== this.state.currentPageNo) {
      this.setState({currentPageNo})
    }
  }

  onComplete(data) {
    axios.post('https://pufjqdfx92.execute-api.eu-central-1.amazonaws.com/dev/survey', JSON.stringify(data))
    this.setState({surveyState: 1, currentPageNo: 3})
  }

  onSubscribe(email) {
    axios.post('https://pufjqdfx92.execute-api.eu-central-1.amazonaws.com/dev/email', email)
    this.setState({surveyState: 2, currentPageNo: 3})
  }
  render() {
    return (
      <div>
        <SurveyHeader currentPageNo={this.state.currentPageNo} />

        {(this.state.surveyState === 0) && <SurveyBody
          onCurrentPageChanged={(currentPageNo) => this.onCurrentPageChanged(currentPageNo)}
          onComplete={(data) => this.onComplete(data)}
        />}

        {(this.state.surveyState === 1) && <SurveyEmail
          onSubscribe={(email) => this.onSubscribe(email)}
        />}

        {(this.state.surveyState === 2) && <SurveyEnd/>}

      </div>
    )
  }
}
