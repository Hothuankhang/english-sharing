import React from 'react'
import {Search} from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
// import {showPage} from '../../redux/action'
import { Avatar } from '@mui/material'

import { useSelector} from "react-redux"
import AdminMain from './AdminMain'
import AddUser from './AddUser'
import AddCategory from './AddCategory'

function AdminHeader() {
    const state = useSelector((state)=>({...state}));
    // const dispatch = useDispatch();
    const page = state.course.page
    const add = state.course.add
    console.log(add)
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
              <Avatar>A</Avatar>
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
      </div>
    )
  }

export default AdminHeader