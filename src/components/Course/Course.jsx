import React, { useState } from 'react'
import '../../assets/scss/courseStyle/style.css'
import {useDispatch, useSelector} from "react-redux"
import { AddCircle, ThumbDown, ThumbUp } from '@mui/icons-material';
import { TextField } from '@mui/material'
function Course() {
  
  // const vid = url.replace("watch?v=","embed/")
  const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  const courseList = state.course.courseList
  const lessonList = state.course.lessonList
  console.log(lessonList)
  const [url,setUrl] = useState(getLink())
  console.log(url)
  function getLink(){
    let list = []
    for(let i = 0 ; i < lessonList.length;i++){
      if(lessonList[i].courseId === localStorage.getItem("courseId")){
        list.push(lessonList[i].video_link)
      }
    }
    return list[0]
    
  }

  function videoRender(link){
    const video = link.replace("watch?v=","embed/")
    console.log(video)
    setUrl(video)
  }
  return (
    <div className='course'>
      <div className='course__display'>
        <iframe
        width="1227"
        height="690"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
        
        <div className='course__list'>
          <h2>Course name</h2>
          {lessonList.map((lesson)=>{
            if(lesson.courseId === localStorage.getItem("courseId")){

              return(
                <ul key={lesson.id}>
                <li>
                  <button 
                  onClick={()=>setUrl(lesson.video_link)
                  }>
                    <h4>{lesson.name}</h4>
                  </button>
                </li>
              </ul>
              )
            }
          })}
        </div>
      </div>
{
  localStorage.getItem("roleName") === "user"?
  <div className='course__interact'>
        <div className='interact'>
          <div className='add interact_btn'>
            <AddCircle/>Thêm khóa học
          </div>
          <div className='up interact_btn'>
            <ThumbUp/>Thích
          </div>
          <div className='down interact_btn'>
            <ThumbDown/>Không thích
          </div>
        </div>
        <div className='interact_field'>

        <TextField
          id=""
          label='Để lại thắc mắc của bạn ở đây'
          value=''
          // onChange={}
          className='field_area'
          
        />

        </div>
      </div>:
      ""
}
      
    </div>
  )
}

export default Course