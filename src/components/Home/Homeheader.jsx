import React from 'react'
import {Search} from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
import {loginCourse,signinCourse, showPage} from '../../redux/action'
import Homebody from './Homebody'

import {useDispatch, useSelector} from "react-redux"
import ListCourse from '../Course/ListCourse'
import Course from '../Course/Course'
import Login from '../Login/Login'
import Signin from '../Signin/Signin'

function Homeheader() {
  const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  const loginShow = state.course.login
  const signupShow = state.course.signin
  const page = state.course.page

  function handleLogin(){
    dispatch(
      loginCourse(
        !loginShow
      )
    )
  }
  
  function handleSignup(){
    dispatch(
      signinCourse(
          !signupShow
      )
    )
  }

  function handleShowList(){
    dispatch(
      showPage(
        'LIST'
      )
    )
  }

  function handleHomePage(){
    dispatch(
      showPage(
        'HOME'
      )
    )
  }

  return (
    <div className='english__course'>
      <div className='navbar'>
        {/* ICON */}
          <div className='navbar__logo' onClick={handleHomePage}>
            <p  className="logo" >
              <img src={Logo} alt="logo" />
            </p>
            <h4>UTEnglish</h4>
          </div>

        {/* SEARCH */}
          {/* <div className='navbar__search'>
            <div className="search__bar">
              <div className="icon">
              <Search></Search>
              </div>

              <input className="search__input" 
                spellCheck="false" 
                placeholder="Tìm kiếm khóa học, bài viết, video, ...">
              </input>
            </div>
          </div> */}

        {/* LOGIN */}
          <div className='navbar__btn'>
          <button className='courses sign_up' onClick={handleShowList} >Khóa học</button>
            <button  className='sign_up' onClick={handleSignup}>Đăng kí</button>
            <button className='login' onClick={handleLogin}>Đăng nhập</button>
          </div>
      </div>
      {(() => {
      switch(page){
        case 'HOME':
          return <Homebody/>

        case 'LIST':
          return <ListCourse/>  

        case 'COURSE':
          return <Course/>
          
        default:
          return <Homebody/>
      }})()}
      {loginShow ? <Login></Login> : ""}
      {signupShow ? <Signin></Signin> : ""}
    </div>
  )
}

export default Homeheader