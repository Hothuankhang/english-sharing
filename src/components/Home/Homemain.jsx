import React from 'react'
import '../../assets/scss/homeStyle/mainStyle.css'
import Logo from '../../assets/img/backgrd.webp'
function Homemain() {
  return (
    <div>
        {/* <!-- Intro start --> */}
            <div id="intro" >
                <div className="main__content">
                    <h3 className="head__content__header">Được xem nhiều nhất</h3>
                    <ul className="place row">
                        <li className="place__list">
                            <img src={Logo} alt=""/>
                            <div className="list__info">
                                <h4 className="list__info__place">Tên khóa</h4>
                                <p className="list__info__time">Ngày tạo</p>
                                <p className="list__info__desc">Nội dung</p>
                                <button className="list__info__buy button">Tham gia ngay</button>
                            </div>
                        </li>
                        <li className="place__list">
                            <img src={Logo} alt=""/>
                            <div className="list__info">
                                <h4 className="list__info__place">Tên khóa</h4>
                                <p className="list__info__time">Ngày tạo</p>
                                <p className="list__info__desc">Nội dung</p>
                                <button className="list__info__buy button">Tham gia ngay</button>
                            </div>
                        </li>
                        <li className="place__list">
                            <img src={Logo} alt=""/>
                            <div className="list__info">
                                <h4 className="list__info__place">Tên khóa</h4>
                                <p className="list__info__time">Ngày tạo</p>
                                <p className="list__info__desc">Nội dung</p>
                                <button className="list__info__buy button">Tham gia ngay</button>
                            </div>
                        </li>
                    </ul>
                </div>   
                <div className="main__content">
                    <h3 className="head__content__header">Được yêu thích nhất</h3>
                    <ul className="place row">
                        <li className="place__list">
                            <img src={Logo} alt=""/>
                            <div className="list__info">
                                <h4 className="list__info__place">Tên khóa</h4>
                                <p className="list__info__time">Ngày tạo</p>
                                <p className="list__info__desc">Nội dung</p>
                                <button className="list__info__buy button">Tham gia ngay</button>
                            </div>
                        </li>
                        <li className="place__list">
                            <img src={Logo} alt=""/>
                            <div className="list__info">
                                <h4 className="list__info__place">Tên khóa</h4>
                                <p className="list__info__time">Ngày tạo</p>
                                <p className="list__info__desc">Nội dung</p>
                                <button className="list__info__buy button">Tham gia ngay</button>
                            </div>
                        </li>
                        <li className="place__list">
                            <img src={Logo} alt=""/>
                            <div className="list__info">
                                <h4 className="list__info__place">Tên khóa</h4>
                                <p className="list__info__time">Ngày tạo</p>
                                <p className="list__info__desc">Nội dung</p>
                                <button className="list__info__buy button">Tham gia ngay</button>
                            </div>
                        </li>
                    </ul>
                </div>   
            </div>
            {/* <!-- Intro end --> */}
        </div>    
  )
}

export default Homemain