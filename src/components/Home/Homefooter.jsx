import React from 'react'
import UDNlogo from '../../assets/img/UDN.jpg'
import UTElogo from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
function Homefooter() {
  return (
    <div id="footer" className="clear-fix ">   
        <div className="main__content">
        <p className="link">Sản phẩm đồ án thuộc</p> 
            <ul className="icon ">
                <li className="icon__list">
                    <a href="https://www.udn.vn/">
                        <img src={UDNlogo} alt="udnlogo" />
                    </a>
                </li>
                <li className="icon__list">
                    <a href="https://ute.udn.vn/default.aspx">
                        <img src={UTElogo} alt="utelogo" />
                    </a>
                </li>
            </ul>    
        </div> 
    </div>
  )
}

export default Homefooter