import React from 'react'
import Possibilityimage from '../../assets/possibility.png';
import './Possibility.css';
function Possibility() {
  return (
    <>
    <table>    
      <tr><th rowSpan="3"><img className="possibleimage_view"src={Possibilityimage} alt="possibleimage"></img></th>
      <th><div className="requesttopline_view">Request early access to get started.</div>
      <div className="requestinside_view">
        The possiblities are <br></br>
        beyond your imagination.</div><br></br>
        <div className="requestinformation_view">
          Yet bed any for travelling assistance indulgence unpleasing. <br></br>
          Not thoughts all exercise blessing. Indulgence way everything joy <br></br>
          alteration boisterous the attachment. Party we years <br></br>to order
          allow asked of.
        </div><br></br><br></br><br></br>
        <div className='requestlastline_view'>Request early access to get started.</div>
        </th>
      </tr>
    </table>

    </>
  )
}

export default Possibility