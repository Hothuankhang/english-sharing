import React from 'react'
import '../../assets/scss/courseStyle/style.css'
import {useDispatch, useSelector} from "react-redux"
import {showPage} from '../../redux/action'
import { Avatar } from '@mui/material'
import { useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'
function UserCourse() {
    const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const courseList = state.course.courseList
    const courseType = state.course.courseType
    const userList = state.course.userCourse
    let courseListId = []
    let userCourseList = []
    console.log(userList)
    let list = []
    function handleCourse(course,courseId){
        localStorage.setItem('courseId', courseId)
        dispatch(
            showPage(
              'COURSE'
            )
          )
    }


    // useEffect(() => {
    //     getList()
    // },[]);
    // function getList(){
    //     userList.map((course)=>{
    //         for(let i = 0 ; i<courseList.length;i++){
    //             if(courseList[i].id === course.courseId ){
    //                 list.push(courseList[i])
    //             }
    //         }

    //     })
    //     console.log(list)
    //     return list
    // }

    function randomColor(){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let color = "#" + randomColor .toString(16);
        return color
    }
    return (
        <div className="list_course">
            <div className='list__item'>
                <div className='course__type' >
                    <div className='course_wrapper'>
                    {userList.map((course,index)=>{
                                return(
                                    <div className='courses' key={index}>
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
                    )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCourse