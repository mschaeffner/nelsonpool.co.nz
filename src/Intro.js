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
      Hi, my name is Christin and I am Mum of two who came from Berlin to this beautiful place.
      I was pretty amazed to see my children’s progress during their summer swimming lessons and I would love to have more options to see them thriving in the winter as well. I think a non-toxic pool could be a healthier alternative and would probably work well for Nelson.
      To find out if other people have similar aspirations, I created this questionnaire and I would love to see as many people as possible participating and I really appreciate your thoughts, ideas and feedback!
    </div>

    <div style={{paddingTop: '20px'}}>
      <b>How does the questionnaire work?</b>
      <br />
      In general, just chose the right answers for you and tick the box. You can choose more than one answer. I shouldn’t take longer than 5 min to answer. Feel free to comment!
      Interested in staying updated? Just leave your email at the end of the questionnaire.
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
