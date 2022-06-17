import React from 'react'
import '../../assets/scss/courseStyle/style.css'
import {useDispatch, useSelector} from "react-redux"
import {showPage, userCourse} from '../../redux/action'
import { Avatar } from '@mui/material'
import { AddCircle, ThumbDown, ThumbUp } from '@mui/icons-material';
function ListCourse() {
    const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const courseList = state.course.courseList
    const courseType = state.course.courseType
    const userList = state.course.userCourse
    console.log(userList)
    function handleCourse(course,courseId){
        localStorage.setItem('courseId', courseId)
        dispatch(
            showPage(
              'COURSE'
            )
          )
    }

    function handleCheckAdd(courseId){
        let count = 0
        for(let i = 0 ; i<userList.length;i++){
            if(courseId === userList[i].id){
                count++
            }
        }
        console.log(count)
        if(count === 0){
            return true
        }
        else
            return false
    }

    function handleAdd(courseId){
        console.log(courseId,localStorage.getItem("accountId"),Date(Date.now()))
        let count = 0
        for(let i = 0 ; i<userList.length;i++){
            if(courseId === userList[i].courseId){
                count++
            }
        }
        if(count === 0){
            dispatch(
                userCourse(
                    courseId,
                    localStorage.getItem("accountId"),
                    Date(Date.now())
                )
            )
        }
        else{
            alert("Khóa học này đã có trong list")
        }
    }

    function randomColor(){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let color = "#" + randomColor .toString(16);
        return color
    }
    return (
        <div className="list_course">
            <div className='list__item'>
                {courseType.map((type)=>{
                    return(
                <div className='course__type' key={type.id}>
                    <h2>
                        {type.name}
                    </h2>
                    <div className='course_wrapper'>
                        
                    {courseList.map((course)=>{
                        if(course.categoryId === type.id && course.approved !== ""){
                            return(
                                <div className='courses' key={course.id}>
                                <button onClick={()=>handleCourse("ello",course.id)}
                                style={{backgroundColor:randomColor()}}
                                >
                                    <Avatar
                                    className='display_course'
                                    sx={{ bgcolor: 'initial' }}
                                    >{course.name}
                                    <h3>{course.desc}</h3>
                                    </Avatar>
                                </button>
                                    {
                                       localStorage.getItem("roleName") === "user" && handleCheckAdd(course.id)=== true?

                                       <div className='add interact_btn' 
                                       style={{display:"flex", flexDirection:"column", 
                                       alignItems:"center"}}
                                       onClick={()=>handleAdd(course.id)}
                                       >
                                       <AddCircle/>Thêm khóa học
                                        </div>:
                                     "" 
                                    }
                            </div>
                            )
                        }

                    })}
                    </div>
                </div>

                    )
                })}
            </div>
        </div>
    )
}

export default ListCourse