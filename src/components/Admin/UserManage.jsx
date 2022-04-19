import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {useDispatch} from "react-redux"
import {showAdd} from '../../redux/action'

  
  function UserManage() {
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
    }

    function handleAdd(){
      dispatch(
        showAdd(
          "ADD_USER"
        )
      )
    }

    function handleCountLock(){
      let count = 0
      for(let i=0 ; i< rows.length;i++){
        if(rows[i].status==="tạm khóa"){
          count = count+1;
        }
      }
      return count
    }

    function handleChange(changeInfor){
      for(let i=0; i<rows.length; i++){
        if(rows[i]=== changeInfor){
          console.log('a')
          // if(rows[i].status === "tạm khóa"){
          //   rows[i].status = "bình thường"
          // }
          // else
          //   rows[i].status = "tạm khóa"
        }
      }
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'fullName', headerName: 'Tên người dùng', width: 330 },
      { field: 'userName', headerName: 'Tên đăng nhập', width: 230 },
      { field: 'email', headerName: 'Email', width: 430 },
      { field: 'status', headerName: 'Trạng thái', width: 130 },
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
                onClick={()=>handleChange(params.row)}
              >
                Change status
              </Button>
            </strong>
          ),
        },
    ];
    
    var rows = [
    
      { id: "US1", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
      { id: "US2", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"tạm khóa" },
      { id: "US3", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
      { id: "US4", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
      { id: "US5", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
      { id: "US6", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"tạm khóa" },
      { id: "US7", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
      { id: "US8", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"tạm khóa" },
      { id: "US9", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
      { id: "US10", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhang.2511@gmail.com",status:"bình thường" },
  
    ];
  return (
    <div className='user_manage manage'>
        <div className='manage__collect'>
            <h3>Danh sách người dùng</h3>
            <ul>
                <li>
                    <p>Tổng số người dùng</p>
                    <p>Số người dùng bị khóa</p>
                </li>
                <li>
                    <p>{rows.length}</p>
                    <p>{handleCountLock()}</p>
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
                <Button variant="contained" onClick={handleDel} className="delete">Delete</Button>
                <Button variant="contained" onClick={handleAdd} className="add">Add +</Button>
            </div>
        </div>
    </div>
  )
}

export default UserManage