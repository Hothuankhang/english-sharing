import { Close } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select,MenuItem } from '@mui/material';
import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import '../../assets/scss/adminStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import { courseEdit, editCategoy, showCategory, showEdit} from '../../redux/action'

function EditCourse() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const editInfor = state.course.editInfor
  const courseType = state.course.courseType
  const [editType, setEditType] = useState(editInfor.CategoryName);
  const [editName, setEditName] = useState(editInfor.CourseName);
  const [categoryId,setCategoryId] = useState(findId(editInfor.CourseName));

  function handleChange() {
    console.log(editType,editName,categoryId)
    dispatch(
      courseEdit(
        editInfor.id,
        editName,
        categoryId,
        editType
        
      )
    )
  }

  function findId(name){
    for(let i =0; i<courseType.length;i++){
      if(name === courseType[i].name){
        setCategoryId(courseType[i].id)
      }
    }
  }

  function handleChangeType(e){
    setEditType(e.target.value)

    for(let i =0; i<courseType.length;i++){
      if(e.target.value === courseType[i].name){
        setCategoryId(courseType[i].id)
      }
    }
  }

  function handleCancel() {
    dispatch(
      showCategory(
        ""
      )
    )
  }

  return (
    <div id='add'>
        <div className="add__form">
            <Close className='infor__close' 
            onClick={handleCancel}
            ></Close>
              <form className='infor'
              //  onSubmit={handleSubmit}
               >
                <img src={Logo} alt="logo" />
                  <h1>Cập nhật khóa học</h1>
                  <TextField className="infor__pass infor__input" label="" variant="outlined" autoComplete="true" 
                  value={editName}
                  onChange={(e)=> setEditName(e.target.value)}
                  />
                  <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={editType}
              label="Danh mục"
              onChange={handleChangeType}
            >
              {courseType.map((course)=>{
         return(
          <MenuItem value={course.name} key={course.id}
          name={editType}
          >{course.name}</MenuItem>
         )})}
            </Select>
                  <Button 
                  className='infor__btn' 
                  variant="contained" 
                  onClick={handleChange}>Cập nhật</Button>
              </form>
          </div>
  </div>
  )
}

export default EditCourse