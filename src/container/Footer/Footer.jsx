import React from 'react'
import arrow from '../../assets/arrowdown.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footercontainer'>
      <div className='footerheadlight_view'>Do you want to step into the <br></br>future before others.<br></br>
      Join Us.<br></br>
      <img className="arrowcss"src={arrow} alt="arrowdown"></img></div>
   </div>
  )
}

export default Footer