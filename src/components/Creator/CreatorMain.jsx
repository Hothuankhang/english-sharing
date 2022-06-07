import React from 'react'
import '../../assets/scss/adminStyle/style.css'
import {useDispatch, useSelector} from "react-redux"
import {showPage} from '../../redux/action'
import CourseManage from './CourseManage';
import CourseAdd from './CourseAdd';
function CreatorMain() {
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
                <h3>Trang quản lý khóa học cá nhân</h3>
            </div>
            <ul className="tabs_list">
                <li className={page==='COURSE_PERSONAL' ||page==='CREATOR_MAIN' ? "active tab": "tab"} 
                onClick={()=>handleManage('COURSE_PERSONAL')}
                >Khóa học cá nhân</li>
                <li className={page==='COURSE_ADD'? "active tab": "tab"} 
                onClick={()=>handleManage('COURSE_ADD')}
                >Thêm khóa học</li>
            </ul>
        </div>
        {(() => {
        switch(page){
          case 'COURSE_PERSONAL':
            return <CourseManage/>
            // case 'COURSE_ADD':
            // return <CourseAdd/>
          default:
            return <CourseManage/>
        }})()}
    </div>
  )
}

export default CreatorMain