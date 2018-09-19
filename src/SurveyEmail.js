import React from 'react'

export default class SurveyEmail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  render() {
    return(
      <div style={{padding: '25px', borderTop: '2px solid rgb(16, 142, 233)'}}>

        <h3>Thank you very much for your support!</h3>

        <div>
          Please leave your email if you are interested in getting updated.
        </div>

        <form style={{paddingTop: '25px'}}>
            <input
              style={{width: '100%', maxWidth: '300px', marginBottom: '10px', marginTop: '-2px', marginRight: '15px', display: 'block'}}
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value})}
            />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.props.onSubscribe(this.state.email)}
          >Save</button>
        </form>
      </div>
    )
  }

}
