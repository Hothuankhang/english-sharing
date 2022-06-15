import React from 'react'
import {Search} from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
// import {showPage} from '../../redux/action'
import { Avatar } from '@mui/material'

import { useSelector,useDispatch} from "react-redux"

import {showPage, showHeader} from '../../redux/action'
import '../../assets/scss/homeStyle/style.css'
import Homebody from '../Home/Homebody'

import ListCourse from '../Course/ListCourse'
import Course from '../Course/Course'

function UserHeader() {
    const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const page = state.course.page
    const add = state.course.add
    const edit = state.course.edit
    function handleLogout(){
      window.location.reload(false);
      localStorage.clear()
      dispatch(
        showHeader(
          'MAIN'
        )
    )
    
    dispatch(
        showPage(
          'HOME'
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
    return (
      <div className='english__course'>
        <div className='navbar'>
          {/* ICON */}
            <div className='navbar__logo'>
              <p  className="logo" >
                <img src={Logo} alt="logo" />
              </p>
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
            <button className='courses sign_up' onClick={handleShowList} >Khóa học</button>
              <button className='login' onClick={handleLogout}>Đăng xuất</button>
              <Avatar>{localStorage.getItem("accountName").at(-1)}</Avatar>
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

      </div>
    )
  }

export default UserHeader