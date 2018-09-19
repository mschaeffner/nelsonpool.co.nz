import React, { Component } from 'react'
import Steps, { Step } from 'rc-steps'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'

export default class SurveyHeader extends Component {

  render() {
    return (
      <div>

        <div style={{position: 'relative', height: '60px', overflow: 'hidden'}}>
          <img alt='pool' src="pool_small.jpg" style={{width: '100%'}} />
          <h3 className='title_h3'>
            Swimming Pool Northern Nelson
          </h3>
        </div>

        <div style={{padding: '40px 0px 20px 0px'}}>
          <Steps labelPlacement="vertical" current={this.props.currentPageNo}>
            <Step title="Page 1" />
            <Step title="Page 2" />
            <Step title="Page 3" />
          </Steps>
        </div>

      </div>
    )
  }

}
