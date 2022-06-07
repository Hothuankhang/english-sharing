import React, { useState } from 'react'
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { TextareaAutosize } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Close } from '@mui/icons-material'
import Logo  from '../../assets/img/UTE.png'
import '../../assets/scss/addStyle/style.css'
import { useDispatch, useSelector } from "react-redux"
import { addCourse, check, lessonAdd, showCategory, showPage } from '../../redux/action';
function LessonAdd() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const courseType = state.course.courseType
  const page = state.course.page
  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [link,setLink] = useState('');

  function handleCancel() {
    dispatch(
      showCategory(
        ""
      )
    )
  }

  function handleAdd(){

    dispatch(
      lessonAdd(
        name,
        desc,
        link,
        localStorage.getItem("courseId")
      )
    )
  }



  return (
    <div id='login'>
       <div className="add__form">
       <Close className='infor__close' 
            onClick={handleCancel}
            ></Close>
        <form action="/" className='infor' >
          <h1>DANH SÁCH BÀI HỌC</h1>
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
            
        </div>
        <Button className='infor__btn' variant="contained" 
                  onClick={handleAdd}
            >Thêm bài học</Button>
        <div className='form__show'>

        </div>
          </form> 
       </div>

    </div>
  )
}

export default LessonAdd