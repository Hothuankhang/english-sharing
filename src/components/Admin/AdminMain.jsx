import React from 'react'
import '../../assets/scss/adminStyle/style.css'
import UserManage from './UserManage'
import CategoryManage from './CategoryManage'
import CourseManage from './CourseManage'
import {useDispatch, useSelector} from "react-redux"
import {showPage} from '../../redux/action'
function AdminMain() {
  const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  const page = state.course.page
  function handleManage(manage){
    dispatch(
      showPage(
        manage
      )
    )
  }


  return (
    <div className='main'>
        <div className="sidebar">
            <div className="sidebar_logo">
                <h3>Trang quản trị</h3>
            </div>
            <ul className="tabs_list">
                <li className={page==='USER_MANAGE' ||page==='ADMIN_MAIN' ? "active tab": "tab"} 
                onClick={()=>handleManage('USER_MANAGE')}>Người dùng</li>
                <li className={page==='CATEGORY_MANAGE'? "active tab": "tab"} 
                onClick={()=>handleManage('CATEGORY_MANAGE')}>Danh mục</li>
                <li className={page==='COURSE_MANAGE'? "active tab": "tab"} 
                onClick={()=>handleManage('COURSE_MANAGE')}>Khóa học</li>
            </ul>
        </div>
        {(() => {
        switch(page){
          case 'USER_MANAGE':
            return <UserManage/>
            case 'CATEGORY_MANAGE':
            return <CategoryManage/>
            case 'COURSE_MANAGE':
            return <CourseManage/>
            
          default:
            return <UserManage/>
        }})()}
    </div>
  )
}

export default AdminMain