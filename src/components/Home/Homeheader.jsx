import React from 'react'
import {Search} from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/headerStyle.css'
function Homeheader() {

  return (
    <div className='navbar'>
      {/* ICON */}
        <div className='navbar__logo'>
          <a href="https://fullstack.edu.vn/" className="logo" >
            <img src={Logo} alt="logo" />
          </a>
          <h4>UTEnglish</h4>
        </div>

      {/* SEARCH */}
        <div className='navbar__search'>
          <div className="search__bar">
            <div className="icon">
            <Search></Search>
            </div>

            <input className="search__input" 
              spellCheck="false" 
              placeholder="Tìm kiếm khóa học, bài viết, video, ...">
            </input>
          </div>
        </div>

      {/* LOGIN */}
        <div className='navbar__btn'>
          <a href="https://fullstack.edu.vn/" className='sign_up'>Đăng kí</a>
          <a href="https://fullstack.edu.vn/" className='login'>Đăng nhập</a>
        </div>

    </div>
  )
}

export default Homeheader