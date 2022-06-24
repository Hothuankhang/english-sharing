import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {useDispatch, useSelector} from "react-redux"
import {deleteCategory, showAdd, showEdit, 

} from '../../redux/action'

function CategoryManage() {
  const [del,setDel] = useState('')
  const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  const courseType = state.course.courseType
  const courseList = state.course.courseList
  function handleDel(){
    if(del.length<1){
        alert("Hãy chọn dòng cần xóa trước!")
    }
    let count = 0
    for(let i = 0;i<del.length;i++){
      count = count+countCourse(del[i])
    }
    if(count === 0){
      dispatch(
        deleteCategory(
          del
        )
      )
    }
    else
      alert("Chỉ được xóa các danh mục rỗng")
}

    function handleAdd(){
      console.log("a")
      dispatch(
        showAdd(
          "ADD_CATEGORY"
        )
      )
    }
    function handleEdit(changeInfor){
      dispatch(
        showEdit(
          "EDIT_CATEGORY",
          changeInfor
        )
      )
    }
    function handleCountEmpty(){
      let count = 0
      for(let i=0 ; i< rows.length;i++){
        if(rows[i].CourseNumber===0){
          count = count+1;
        }
      }
      return count
    }
    function countCourse(typeID){
      let count = 0
      for(let i = 0 ; i< courseList.length;i++){
        if(typeID === courseList[i].categoryId){
          count++
          
        }
      }
      return count;
    }
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'CategoryName', headerName: 'Tên danh mục', width: 300 },
      { field: 'CourseNumber', headerName: 'Số khóa học', width: 130 },
      // { field: 'Status', headerName: 'Trạng thái', width: 130 },
      {
          field: "click",
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
    ];
    


    var rows = [];
    for(let i=0;i< courseType.length;i++){
      const infor =
      { id: courseType[i].id,
        CategoryName: courseType[i].name, 
        CourseNumber: countCourse(courseType[i].id),
        // Status: courseType[i].status 
      }
      rows.push(infor)
    }
  return (
    <div className='category_manage manage'>
        <div className='manage__collect'>
            <h3>Danh sách danh mục</h3>
            <ul>
                <li>
                    <p>Tổng số danh mục</p>
                    <p>Số danh mục rỗng</p>
                </li>
                <li>
                    <p>{rows.length}</p>
                    <p>{handleCountEmpty()}</p>
                </li>
            </ul>
        </div>
        <div className="data__grid">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[4]}
                checkboxSelection
                onSelectionModelChange={(e)=>setDel(e)}
                className="grid"
                style={{ width: 850, margin:"auto" }}
            />
            <div className='btn'>
                <Button variant="contained" onClick={handleDel} className="delete">Xóa</Button>
                <Button variant="contained" onClick={handleAdd} className="add">Thêm</Button>
            </div>
        </div>
    </div>
  )
}

export default CategoryManage