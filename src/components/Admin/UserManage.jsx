import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {useDispatch} from "react-redux"
import {showAdd, showEdit} from '../../redux/action'

  
  function UserManage() {
    const [del,setDel] = useState([])
    // const [edit,setEdit] = useState()
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

    function handleEdit(changeInfor){
      dispatch(
        showEdit(
          "EDIT_USER",
          changeInfor
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

    function handleCountShare(){
      let count = 0
      for(let i=0 ; i< rows.length;i++){
        if(rows[i].type==="creator"){
          count = count+1;
        }
      }
      return count
    }

    // function handleChange(changeInfor){
    //   for(let i=0; i<rows.length; i++){
    //     if(rows[i]=== changeInfor){
    //       console.log('a')
    //       // if(rows[i].status === "tạm khóa"){
    //       //   rows[i].status = "bình thường"
    //       // }
    //       // else
    //       //   rows[i].status = "tạm khóa"
    //     }
    //   }
    // }

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'fullName', headerName: 'Tên người dùng', width: 330 },
      { field: 'userName', headerName: 'Tên đăng nhập', width: 230 },
      { field: 'email', headerName: 'Email', width: 330 },
      { field: 'status', headerName: 'Trạng thái', width: 130 },
      { field: 'type', headerName: 'Loại tài khoản', width: 130 },
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
    
      { id: "US1", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "h@gmail.com",status:"bình thường",type:"user" },
      { id: "US2", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "ho@gmail.com",status:"tạm khóa",type:"creator" },
      { id: "US3", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hot@gmail.com",status:"bình thường",type:"user" },
      { id: "US4", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hoth@gmail.com",status:"bình thường",type:"user" },
      { id: "US5", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothu@gmail.com",status:"bình thường",type:"user" },
      { id: "US6", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothua@gmail.com",status:"tạm khóa",type:"creator" },
      { id: "US7", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuan@gmail.com",status:"bình thường",type:"user" },
      { id: "US8", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuank@gmail.com",status:"tạm khóa",type:"user" },
      { id: "US9", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankh@gmail.com",status:"bình thường",type:"user" },
      { id: "US10", fullName: 'Ho Thuan Khang', userName: 'k2511', email: "hothuankhan@gmail.com",status:"bình thường",type:"creator" },
  
    ];
  return (
    <div className='user_manage manage'>
        <div className='manage__collect'>
            <h3>Danh sách người dùng</h3>
            <ul>
                <li>
                    <p>Tổng số người dùng</p>
                    <p>Số người dùng bị khóa</p>
                    <p>Số người người chia sẻ</p>
                </li>
                <li>
                    <p>{rows.length}</p>
                    <p>{handleCountLock()}</p>
                    <p>{handleCountShare()}</p>
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