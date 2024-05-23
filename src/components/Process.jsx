import React from 'react'
import "./Process.css"

const Process = () => {
  return (
    <div id='About' className='Process'>
      <div className='processImg'>
        <img src="./images/processImg.png" alt="Process" />
      </div>
      <div className='Sublist'>
        <h5>Sub list Section</h5>
        <img id='divider' src="./images/processDivider.png" alt="Divider" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Consectetur sint in recusandae voluptate omnis at temporibus praesentium explicabo iste numquam nemo, ea quasi.</p>
        <div className='sublistItem'>
          <div className='uploadPic1'>
            <img src="./images/title1upload.png" alt="Icon" />
          </div>
          <div className='title'>
            <h5>Title</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi ducimus eius?</p>
          </div>
        </div>
        <div className='sublistItem'>
          <div className='uploadPic2'>
            <img src="./images/title1upload.png" alt="Icon" />
          </div>
          <div className='title'>
            <h5>Title</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eveniet eaque praesentium deleniti veritatis obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Process

