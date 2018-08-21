import React, { Component } from 'react'
import surveyJSON from "./SurveyJSON"
import * as Survey from "survey-react"


//Survey.Survey.cssType = "bootstrap"

const defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
defaultThemeColors["$main-color"] = "#108ee9";
defaultThemeColors["$main-hover-color"] = "#108ee9";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#7ff07f";
defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";
Survey.StylesManager.applyTheme();


export default class SurveyBody extends Component {

  componentDidMount() {
    window.setTimeout(() => window.scrollTo(0, 0), 10)
  }

  onCurrentPageChanged(currentPageNo) {
    window.setTimeout(() => window.scrollTo(0, 0), 10)
    this.props.onCurrentPageChanged(currentPageNo)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    return (
      <div>
        <Survey.Survey
      		onCurrentPageChanged={(event) => this.onCurrentPageChanged(event.currentPageNo)}
          json={surveyJSON}
          onComplete={(data) => this.props.onComplete(data)}
        />
      </div>
    )
  }
}
