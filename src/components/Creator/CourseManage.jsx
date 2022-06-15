import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { courseDelete, 
  // deleteCategory, 
  showCategory, 
  // showPage 
} from '../../redux/action';
import CourseAdd from './CourseAdd';
import '../../assets/scss/addStyle/style.css'
import EditCourse from './EditCourse';
import LessonManage from './LessonManage';

function CourseManage() {
  const [del,setDel] = useState([])
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const courseList = state.course.courseList
  const show = state.course.showCategory
  const lessonList = state.course.lessonList

  function handleDel(){
    if(del.length<1){
        alert("Hãy chọn dòng cần xóa trước!")
    }
    dispatch(
      courseDelete(
        del
      )
    )
}

    function handleAdd(){
      dispatch(
        showCategory(
          'COURSE_ADD'
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

    function handleLessonAdd(courseId){
      
      dispatch(
        showCategory(
          'LESSON_ADD',
        )
      )
    }

    function handleCountCourse(countIf){
      let count = 0
      for(let i=0 ; i< rows.length;i++){
        if(rows[i].Approve===""){
          count = count+1;
        }
      }
      return count
    }

    function handleLessonCount(courseId){
      let count = 0
      for(let i=0 ; i< lessonList.length;i++){
        if(lessonList[i].courseId===courseId){
          count ++;
        }
      }
      
      return count
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'CourseName', headerName: 'Tên khóa học', width: 230 },
      { field: 'CategoryName', headerName: 'Thuộc danh mục', width: 180 },
      { field: 'Lesson', headerName: 'Số bài học', width: 80 },
      { field: 'Approve', headerName: 'Ngày duyệt', width: 230 },
      {
        field: "Status",
        headerName: "Trạng thái",
        width: 130,
        renderCell: (params) => (
          <strong>
            {params.row.Approve !== ""?
            "đã duyệt"
            :
            "chưa duyệt"  
          }
          </strong>
        ),
      },
      {
        field: "clickEdit",
        headerName: "",
        width: 130,
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
      // {
      //   field: "clickAdd",
      //   headerName: "",
      //   width: 150,
      //   renderCell: (params) => (
      //     <strong>
      //       <Button
      //         variant="contained"
      //         color="primary"
      //         size="small"
      //         style={{ marginLeft: 16 }}
      //         onClick={()=>handleLessonAdd(params.row.id)}
      //       >
      //         Thêm bài học
      //       </Button>
      //     </strong>
      //   ),
      // },
    ];
    var rows = [];

  for(let i=0;i< courseList.length;i++){
    const infor =
    { id:courseList[i].id,
      CourseName:courseList[i].name,
      CategoryName:courseList[i].type,
      Author:courseList[i].creatorName,
      Lesson: handleLessonCount(courseList[i].id),
      Approve: courseList[i].approved,
      Status:courseList[i].status,
      click: <button>Hello</button>,}
      if(courseList[i].creatorID === localStorage.getItem("accountId")){
        rows.push(infor)

      }
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
                <Button variant="contained" onClick={handleDel} className="delete">Xóa khóa học</Button>
                <Button variant="contained" onClick={handleAdd} className="add">Thêm khóa học</Button>
            </div>
    </div>
    {(() => {
        switch(show){
            case 'COURSE_ADD':
            return <CourseAdd/>
            case 'LESSON_ADD':
            return <LessonManage/>
            case 'LESSON_EDIT':
            return <EditCourse/>
          default:
            return ""
        }})()}
</div>
  )
}

export default CourseManage