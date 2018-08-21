import React from 'react'

export default () =>
  <div style={{padding: '25px', borderTop: '2px solid rgb(16, 142, 233)'}}>

    <h3>Thank you very much for your support!</h3>

    <div>
      Please leave your email if you are interested in getting updated.
    </div>

    <form style={{paddingTop: '25px'}}>
        <input style={{width: '300px', marginTop: '-2px', marginRight: '15px', display: 'inline-block'}} type="email" className="form-control" id="email" placeholder="Email" />
        <button type="submit" className="btn btn-primary">Save</button>
    </form>

  </div>
