import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {useDispatch} from "react-redux"
import {showAdd, showEdit} from '../../redux/action'

function CategoryManage() {
  const [del,setDel] = useState([])
  // const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
    function handleDel(){
        if(del.length<1){
            alert("Hãy chọn dòng cần xóa trước!")
        }
        // for(let i=0;i< rows.length; i++){

        //     for(let j=0;j< del.length; j++){
        //         if(rows[i].id === del[j]){
        //             rows.filter((row) => row !== rows[i])
        //         }
        //     }
        // }
        console.log(rows)
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
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'CategoryName', headerName: 'Tên danh mục', width: 330 },
      { field: 'CourseNumber', headerName: 'Số khóa học', width: 230 },
      // { field: 'Status', headerName: 'Trạng thái', width: 230 },
      {
        field: "Status",
        headerName: "Trạng thái",
        width: 230,
        renderCell: (params) => (
          <strong>
            {params.row.CourseNumber !== 0?
            "bình thường"
            :
            "rỗng"  
          }
          </strong>
        ),
      },
      {
          field: "click",
          headerName: "",
          width: 190,
          renderCell: (params) => (
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={()=>handleEdit(params.row)}
              >
                Edit
              </Button>
            </strong>
          ),
        },
    ];
    
    var rows = [
    
      { id: "CT1", CategoryName: 'Kĩ năng nghe', CourseNumber: 3 },
      { id: "CT2", CategoryName: 'Kĩ năng nói', CourseNumber: 3},
      { id: "CT3", CategoryName: 'Kĩ năng đọc', CourseNumber: 3},
      { id: "CT4", CategoryName: 'Kĩ năng viết', CourseNumber: 0},
      { id: "CT5", CategoryName: 'Kĩ năng nghe', CourseNumber: 3 },
      { id: "CT6", CategoryName: 'Kĩ năng nghe', CourseNumber: 3 },
      { id: "CT7", CategoryName: 'Kĩ năng nghe', CourseNumber: 0 },
      { id: "CT8", CategoryName: 'Kĩ năng nghe', CourseNumber: 3 },
      { id: "CT9", CategoryName: 'Kĩ năng nghe', CourseNumber: 3 },
  
    ];
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
            />
            <div className='btn'>
                <Button variant="contained" onClick={handleDel} className="delete">Delete</Button>
                <Button variant="contained" onClick={handleAdd} className="add">Add +</Button>
            </div>
        </div>
    </div>
  )
}

export default CategoryManage