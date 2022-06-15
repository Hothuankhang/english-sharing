import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Close } from '@mui/icons-material'

import '../../assets/scss/homeStyle/style.css'
import { useDispatch, useSelector } from "react-redux"
import {  lessonAdd, lessonDelete, showCategory} from '../../redux/action';

import LessonAdd from './LessonAdd'
import EditLesson from './EditLesson';
function LessonManage() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const courseType = state.course.courseType
  const page = state.course.page
  const courseList = state.course.courseList
  const lessonList = state.course.lessonList
  const editInfor = state.course.editInfor
  const show = state.course.showCategory
  const [del,setDel] = useState([])

  function getCreatorId(){
    let list = []
    for(let i = 0 ; i<courseList.length;i++){
      if(courseList[i].creatorID === localStorage.getItem("accountId")){
        list.push(courseList[i].id)
      }
    }

    return list
  }
  const listing = getCreatorId()
  function getCourse(courseId){
    console.log(courseId)
    let courseName 
    for(let i = 0; i<courseList.length;i++){
      if(courseId===courseList[i].id){
        courseName = courseList[i].name
      }
    }
    return courseName 
  }

  function handleAdd(){
    dispatch(
      showCategory(
        'LESSON_ADD'
      )
    )
  }

  function handleEdit(editInfor){
    console.log(editInfor)
    dispatch(
      showCategory(
        'LESSON_EDIT',
        editInfor
      )
    )
  }

  function handleDel(){
    if(del.length<1){
        alert("Hãy chọn dòng cần xóa trước!")
    }

    dispatch(
      lessonDelete(
        del
      )
    )
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'LessonName', headerName: 'Tên bài học', width: 200 },
    { field: 'Description', headerName: 'Miêu tả', width: 330 },
    { field: 'Course', headerName: 'Khóa học', width: 330 },
    {
      field: "clickEdit",
      headerName: "",
      width: 200,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={()=>handleEdit(params.row)}
          >
            Cập nhật
          </Button>
        </strong>
      ),
    },
  ];
  var rows = [];

for(let i=0;i< lessonList.length;i++){
    const infor =
    { id:lessonList[i].id,
      LessonName:lessonList[i].name,
      Description:lessonList[i].desc,
      Course:getCourse(lessonList[i].courseId),
      click: <button>Hello</button>
    }
    for(let j = 0; j< listing.length;j++){
      if(listing[j] === lessonList[i].courseId){

        rows.push(infor)
      }
    }
  }


  return (

        <div className='course_manage manage'>
    <div className='manage__collect'>
        <h3>Danh sách bài học</h3>
        <ul>
            <li>
                <p>Tổng số bài học</p>
            </li>
            <li>
                <p>{rows.length}</p>
            </li>
        </ul>
    </div>
    <div className="data__grid">
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(e)=>setDel(e)}
            className="grid"
        />
            <div className='btn'>
                <Button variant="contained" onClick={handleDel} className="delete">Xóa bài học</Button>
                <Button variant="contained" 
                onClick={handleAdd} 
                className="add">Thêm bài học</Button>
            </div>
            
    </div>
       {(() => {
        switch(show){
            case 'LESSON_ADD':
            return <LessonAdd/>
            case 'LESSON_EDIT':
            return <EditLesson/>
          default:
            return ""
        }})()}
    </div>
  )
}

export default LessonManage