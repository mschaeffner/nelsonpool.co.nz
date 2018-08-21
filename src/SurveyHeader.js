import React, { Component } from 'react'
import Steps, { Step } from 'rc-steps'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'

export default class SurveyHeader extends Component {

  render() {
    return (
      <div>

        <div style={{position: 'relative', height: '60px'}}>
          <img alt='pool' src="pool_small.jpg" />
          <h3 style={{position: 'absolute', top: '20px', left: '10px', fontWeight: 'bold', color: 'white'}}>
            Swimming Pool Northern Nelson
          </h3>
        </div>

        <div style={{padding: '40px 80px 20px 80px'}}>
          <Steps labelPlacement="vertical" current={this.props.currentPageNo}>
            <Step title="Demographics" />
            <Step title="Usage stuff" />
            <Step title="Bla blub oh oh" />
          </Steps>
        </div>

      </div>
    )
  }

}
