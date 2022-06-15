import React from 'react'
import Listening from '../../assets/img/listening-skill.png'
import '../../assets/scss/courseStyle/style.css'
import {useDispatch, useSelector} from "react-redux"
import {showPage} from '../../redux/action'
import { Avatar } from '@mui/material'
function ListCourse() {
    const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const courseList = state.course.courseList
    const courseType = state.course.courseType
    function handleCourse(course,courseId){
        localStorage.setItem('courseId', courseId)
        dispatch(
            showPage(
              'COURSE'
            )
          )
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