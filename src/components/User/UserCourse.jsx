import React, { useState } from 'react'
import '../../assets/scss/courseStyle/style.css'
import { useDispatch, useSelector } from "react-redux"
import { showPage } from '../../redux/action'
import { Avatar } from '@mui/material'
import { useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'
import { DeleteSharp } from '@mui/icons-material'
function UserCourse() {
    const state = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
    const courseList = state.course.courseList
    const courseType = state.course.courseType
    const userList = state.course.userCourse

    console.log(userList)
    const [userCourseList,setUserCourseList] = useState(userList)
    function handleCourse(course, courseId) {
        localStorage.setItem('courseId', courseId)
        dispatch(
            showPage(
                'COURSE'
            )
        )
    }

    function handleDelete(courseId,index){
        let newUserCourseList = userCourseList
        newUserCourseList.splice(index, 1)
        console.log(newUserCourseList)
        setUserCourseList(newUserCourseList)
        // projectFirestore.collection("UserCourses").doc(courseId).delete()
        // for(let i = 0; i< newUserCourseList.length; i++){
        //     if(newUserCourseList.id === )
        // }

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

    function randomColor() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let color = "#" + randomColor.toString(16);
        return color
    }
    return (
        <div className="list_course">
            <div className='list__item'>
                <div className='course__type' >
                    <h1
                        style={{
                            fontSize: "40px"
                        }}
                    >DANH SÁCH KHÓA HỌC CÁ NHÂN</h1>
                    <div className='course_wrapper'>
                        {userCourseList.map((course, index) => {
                            return (
                                <div className='courses' key={course.id}>
                                    <button onClick={() => handleCourse("ello", course.id)}
                                        style={{ backgroundColor: "black" }}
                                    >
                                        <Avatar
                                            className='display_course'
                                            sx={{ bgcolor: 'initial' }}
                                        >{course.name}
                                            <h3>{course.desc}</h3>
                                        </Avatar>
                                    </button>
                                    <div className='add interact_btn'
                                        style={{
                                            display: "flex", flexDirection: "column",
                                            alignItems: "center",
                                            cursor:"pointer"
                                        }}
                                        onClick={() => handleDelete(course.id, index)}
                                    >
                                        <DeleteSharp />Xóa khóa học
                                    </div>

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