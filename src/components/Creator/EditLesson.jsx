import { Close } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select,MenuItem } from '@mui/material';
import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import '../../assets/scss/adminStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import { courseEdit, editCategoy, lessonEdit, showCategory, showEdit} from '../../redux/action'

function EditLesson() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const editInfor = state.course.editInfor
  const courseType = state.course.courseType
  const courseList = state.course.courseList
  const lessonList  = state.course.lessonList
  const [editType, setEditType] = useState(editInfor.CategoryName);
  const [editName, setEditName] = useState(editInfor.CourseName);
  const [name,setName] = useState(editInfor.LessonName);
  const [desc,setDesc] = useState(editInfor.Description);
  
  const [course, setCourse] = useState(editInfor.Course); 
  console.log(editInfor)

  function getLink(){
    let linkGetter
    for(let i = 0; i<lessonList.length; i++){
      if(editInfor.id === lessonList[i].id){
        linkGetter = lessonList[i].vide_link
      }
    }
    return linkGetter
  }
  const [link,setLink] = useState(getLink());



  function handleChangeCourse(e){
    setCourse(e.target.value)


  }

  function handleCancel() {
    dispatch(
      showCategory(
        ""
      )
    )
  }

  function handleEdit(){

    let courseId
    for(let i =0; i<courseList.length;i++){
      if(course === courseList[i].name){
        courseId = courseList[i].id
      }
    }
    console.log(name,desc,link,course,courseId)
    dispatch(
      lessonEdit(
        editInfor.id,
        name,
        desc,
        link,
        courseId
      )
    )
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
                  value={name}
                  />
        <TextField className="infor__fullname infor__input" 
            label="Miêu tả" variant="outlined" autoComplete="true"
                  onChange={(e)=> setDesc(e.target.value)}
                  value={desc}
            />
        <TextField className="infor__fullname infor__input" 
            label="Link" variant="outlined" autoComplete="true"
                  onChange={(e)=> setLink(e.target.value)}
                  value={link}
            />    
        <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Bài học"
              onChange={handleChangeCourse}
            >
              {courseList.map((courseList)=>{
         return(
          <MenuItem value={courseList.name} key={courseList.id}
          name={courseList.id}
          >{courseList.name}</MenuItem>
         )})}
            </Select>
        </div>
        <Button className='infor__btn' variant="contained" 
                  onClick={handleEdit}
            >Cập nhật bài học</Button>
        
          </form> 
       </div>

    </div>
  )
}

export default EditLesson