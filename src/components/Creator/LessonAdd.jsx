import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Close } from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/addStyle/style.css'
import { useDispatch, useSelector } from "react-redux"
import {  lessonAdd, lessonDelete, showCategory} from '../../redux/action';
function CourseAdd() {
  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [link,setLink] = useState('');


  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const courseType = state.course.courseType
  const courseList = state.course.courseList
  const page = state.course.page
  const [courseId,setCourseId] = useState(courseList[0].id);
  const [course, setCourse] = useState(getFirst()); 

  console.log()
  function handleChangeType(e){
    setCourse(e.target.value)

    // for(let i =0; i<courseList.length;i++){
    //   if(e.target.value === courseList[i].name){
    //     setCourseId(courseList[i].id)
    //   }
    // }
  }
  

  function handleCancel() {
    dispatch(
      showCategory(
        ""
      )
    )
  }

  function handleAdd(){
console.log(courseId)
    dispatch(
      lessonAdd(
        name,
        desc,
        link,
        courseId
      )
    )
  }    

  function getFirst(){
    const list =[]

    for(let i = 0 ; i< courseList.length;i++){
      if(courseList[i].creatorID === localStorage.getItem("accountId")){
        list.push(courseList[i])
      }
    }
    return list[0].name
  }



  return (
    <div id='login'>
       <div className="login__form">
       <img src={Logo} alt="logo" />
       <Close className='infor__close' 
            onClick={handleCancel}
            ></Close>
        <form action="/" className='infor' >
        <div className='form__input'>
        <TextField className="infor__fullname infor__input" 
                  label="Tên bài học" variant="outlined" autoComplete="true"
                  onChange={(e)=> setName(e.target.value)}
                  />
        <TextField className="infor__fullname infor__input" 
            label="Miêu tả" variant="outlined" autoComplete="true"
                  onChange={(e)=> setDesc(e.target.value)}
            />
        <TextField className="infor__fullname infor__input" 
            label="Link" variant="outlined" autoComplete="true"
                  onChange={(e)=> setLink(e.target.value)}
            />    
        <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Bài học"
              onChange={handleChangeType}
            >
              {courseList.map((courseList)=>{
                {
                  if(courseList.creatorID === localStorage.getItem("accountId")){

                    return(
           
                     <MenuItem value={courseList.name} key={courseList.id}
                     name={courseList.id}
                     onClick={()=>setCourseId(courseList.id)}
                     >{courseList.name}</MenuItem>
                    )
                  }
                }
         })}
            </Select>
        </div>
        <Button className='infor__btn' variant="contained" 
                  onClick={handleAdd}
            >Thêm bài học</Button>
        
          </form> 
       </div>

    </div>
  )
}

export default CourseAdd