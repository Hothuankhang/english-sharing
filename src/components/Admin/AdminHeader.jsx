import React from 'react'
import {Search} from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
// import {showPage} from '../../redux/action'
import { Avatar } from '@mui/material'

import { useSelector,useDispatch} from "react-redux"
import AdminMain from './AdminMain'
import AddUser from './AddUser'
import AddCategory from './AddCategory'
import EditUser from './EditUser'
import EditCategory from './EditCategory'
import {showPage, showHeader} from '../../redux/action'
function AdminHeader() {
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
    function onlyCapitalLetters (str) {
      return str.replace(/[^A-Z]+/g, "");
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
              <button className='login' onClick={handleLogout}>Đăng xuất</button>
              <Avatar sx={{ width: 50, height: 50}}>{onlyCapitalLetters(localStorage.getItem("accountName"))}</Avatar>
            </div>
        </div>
        {(() => {
        switch(page){
          case 'ADMIN_MAIN':
            return <AdminMain/>
            
          default:
            return <AdminMain/>
        }})()}
        {(() => {
        switch(add){
          case "ADD_USER":
            return <AddUser/>

          case "ADD_CATEGORY":
            return <AddCategory/>
            
          default:
            return ""
        }})()}
        {(() => {
        switch(edit){
          case "EDIT_USER":
            return <EditUser/>

          case "EDIT_CATEGORY":
            return <EditCategory/>
            
          default:
            return ""
        }})()}
      </div>
    )
  }

export default AdminHeader