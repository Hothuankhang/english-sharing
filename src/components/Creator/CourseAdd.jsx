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
import { addCourse, check, showCategory, showPage } from '../../redux/action';
function CourseAdd() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const courseType = state.course.courseType
  const page = state.course.page
  const [name,setName] = useState('');
  const [categoryId,setCategoryId] = useState(courseType[0].id);
  const [desc,setDesc] = useState('');
  const [type, setType] = useState(courseType[0].name); 

  function handleCancel() {
    dispatch(
      showCategory(
        ""
      )
    )
  }

  function handleChangeType(e){
    setType(e.target.value)

    for(let i =0; i<courseType.length;i++){
      if(e.target.value === courseType[i].name){
        setCategoryId(courseType[i].id)
      }
    }
  }


  function handleAdd(){
    const accountId = localStorage.getItem('accountId')
    const accountName = localStorage.getItem('accountName')
    dispatch(
      addCourse(
        Date.now(),
        categoryId,
        accountId,
        accountName, 
        desc,
        name,
        type
      )
    )
  }



  return (
    <div id='login'>
       <div className="login__form">
       <Close className='infor__close' 
            onClick={handleCancel}
            ></Close>
        <form action="/" className='infor'>
        <img src={Logo} alt="logo" />

         <TextField className="infor__fullname infor__input" 
                  label="Tên khóa học" variant="outlined" autoComplete="true"
                  onChange={(e)=> setName(e.target.value)}
                  />
                  <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Danh mục"
              onChange={handleChangeType}
            >
              {courseType.map((course)=>{
         return(
          <MenuItem value={course.name} key={course.id}
          name={course.id}
          >{course.name}</MenuItem>
         )})}
            </Select>
            <TextField className="infor__fullname infor__input" 
            label="Giới thiệu" variant="outlined" autoComplete="true"
                  onChange={(e)=> setDesc(e.target.value)}
            />
            <Button className='infor__btn' variant="contained" 
                  onClick={handleAdd}
            >Thêm khóa học</Button>
          </form> 
       </div>

    </div>
  )
}

export default CourseAdd