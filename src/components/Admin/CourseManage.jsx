import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {useDispatch, useSelector} from "react-redux"
import { courseApprove, courseDelete, 

} from '../../redux/action';

function CourseManage() {
  const [del,setDel] = useState([])
  const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  const course = state.course.courseList
  const lessonList = state.course.lessonList
  function handleDel(){
    let countLesson = 0
    if(del.length<1){
        alert("Hãy chọn dòng cần xóa trước!")
    }
    for(let i = 0;i<del.length;i++){
      countLesson = countLesson+handleLessonCount(del[i])
      console.log(handleLessonCount(del[i]))
    }
    console.log(countLesson)
    if(countLesson === 0){
      dispatch(
        courseDelete(
          del
        )
      )
    }
    else
      alert("Chỉ được xóa các khóa học rỗng")
  }


  function handleApprove(approveId){
    dispatch(
      courseApprove(
        approveId,
        localStorage.getItem('accountId')
      )
    )
  }

    function handleCountCourse(countIf){
      let count = 0
      for(let i=0 ; i< course.length;i++){
        if(course[i].approved===''){
          count = count+1;
        }
      }
      return count
    }
    
    function handleLessonCount(courseId){
      let count = 0

      for(let i=0 ; i< lessonList.length;i++){
        if(lessonList[i].courseId===courseId){
          count = count+1;
        }
      }
      return count
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'CourseName', headerName: 'Tên khóa học', width: 130 },
      { field: 'CategoryName', headerName: 'Thuộc danh mục', width: 230 },
      { field: 'Author', headerName: 'Người tạo', width: 230 },
      { field: 'Lesson', headerName: 'Số bài học', width: 80 },
      { field: 'Approve', headerName: 'Ngày duyệt', width: 200 },
      { field: 'Status', headerName: 'Trạng thái', width: 130 },
      { field: 'ApprovedID', headerName: 'ID người duyệt', width: 130 },
      {
        field: "click",
        headerName: "",
        width: 90,
        renderCell: (params) => (
          params.row.Approve === ""?
          <p>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 , }}
              onClick={()=>handleApprove(params.row.id)}
            >
              Duyệt
            </Button>
          </p>
          :
          <p></p>
        ),
      },
    ];
    
    var rows = [];
    for(let i=0;i< course.length;i++){
      const infor =
      { id:course[i].id,
        CourseName:course[i].name,
        CategoryName:course[i].type,
        Author:course[i].creatorName,
        Lesson: handleLessonCount(course[i].id),
        Approve: course[i].approved,
        Status:course[i].status,
        ApprovedID:course[i].adminID}
      rows.push(infor)
    }
  return (
    <div className='course_manage manage'>
    <div className='manage__collect'>
        <h3>Danh sách khóa học</h3>
        <ul>
            <li>
                <p>Tổng số khóa học</p>
                <p>Số khóa học đã duyệt</p>
                <p>Số khóa học chờ duyệt</p>
                {/* <p>Số khóa học bị báo cáo</p> */}
            </li>
            <li>
                <p>{rows.length}</p>
                <p>{rows.length-handleCountCourse("chưa duyệt")}</p>
                <p>{handleCountCourse("chưa duyệt")}</p>
                {/* <p>{handleCountCourse("bị báo cáo")}</p> */}
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
                <Button variant="contained" onClick={handleDel} className="delete">Xóa</Button>
            </div>
    </div>
</div>
  )
}

export default CourseManage