import React from 'react'
import {Search} from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
import {loginCourse,signinCourse} from '../../redux/action'


import {useDispatch, useSelector} from "react-redux"
function Homeheader() {
  const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  const loginShow = state.course.login
  const signinShow = state.course.signin
  function handleLogin(){
    dispatch(
      loginCourse(
        !loginShow
      )
    )
  }
  
  function handleSignin(){
    dispatch(
        signinCourse(
            !signinShow
        )
    )
}

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
          <button  className='sign_up' onClick={handleSignin}>Đăng kí</button>
          <button className='login' onClick={handleLogin}>Đăng nhập</button>
        </div>
    </div>
  )
}

export default Homeheader