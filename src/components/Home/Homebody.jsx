import React from 'react'
import '../../assets/scss/homeStyle/style.css'
import Homemain from './Homemain'
import Homefooter from './Homefooter'
// import {useSelector} from "react-redux"


function Homebody() {

  return (
    <div className='body'>
      <section className="join-now">
        <div className="content">
          <div className="headline">UTEnglish</div>
          <div className="sub-text">Giúp các bạn sinh viên UTE tiếp cận được với
           các khóa học tiếng anh chất lượng, từ cơ bản đến nâng cao. 
           Đồng thời cũng là nơi để các bạn chia sẻ các bí quyết học tiếng anh đến 
           cộng đồng. </div>
        </div>
      </section>
      <Homemain/>
      <Homefooter/>

    </div>
  )
}

export default Homebody