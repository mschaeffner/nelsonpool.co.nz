import React from 'react'

export default ({onStart}) =>

<div>

  <div style={{position: 'relative'}}>
    <img alt='pool' src="pool_big.jpg" />
    <h1 style={{position: 'absolute', top: '60px', left: '25px', fontSize: '48px', lineHeight: '150%', fontWeight: 'bold', color: 'white'}}>
      Swimming Pool
      <br />
      Northern Nelson
    </h1>
  </div>

  <div style={{padding: '0 25px'}}>

    <div style={{paddingTop: '20px'}}>
      <b>Swimming Pool for the Northern Nelson region</b>
      <br />
      <br />
      Hi, my name is Christin and I am Mum of two who came from Berlin to this beautiful place. I would love to have more options for us to enjoy water even in winter. I think a non-toxic indoor pool could be a healthier alternative and would probably work well for Nelson. To find out if other people have similar aspirations, I created this questionnaire and I would love to see as many people as possible participating and I really appreciate your thoughts, ideas and feedback!
      <br />
      <br />
      Just chose the right answer for you and tick the box. Sometimes, it is indicated that you can choose more than one answer. I shouldn’t take longer than 8 min to answer.
    </div>

    <div style={{paddingTop: '20px'}}>
      <b>Thank you very much for your support!</b>
    </div>

  </div>


  <div style={{textAlign: 'center', padding: '40px'}}>
    <button type="button" className="btn btn-primary" style={{width: '120px'}} onClick={() => onStart()}>
      Start ▸
    </button>
  </div>

</div>
