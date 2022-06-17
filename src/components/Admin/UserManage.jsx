import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {deleteUser, showAdd, showEdit,signinCourse} from '../../redux/action'
import { useDispatch, useSelector } from "react-redux"
import Signin from '../Signin/Signin';

  function UserManage() {
    const [del,setDel] = useState([])
    const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const signupShow = state.course.signin
    function handleDel(){
        if(del.length<1){
            alert("Hãy chọn dòng cần xóa trước!")
        }
        dispatch(
          deleteUser(
            del
          )
        )
    }

    // function handleAdd(){
    //   dispatch(
    //     showAdd(
    //       "ADD_USER"
    //     )
    //   )
    // }

    function handleEdit(changeInfor){
      console.log(changeInfor)
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
        if(rows[i].status==="lock"){
          count = count+1;
        }
      }
      return count
    }

    function handleCountShare(){
      let count = 0
      for(let i=0 ; i< rows.length;i++){
        if(rows[i].role ==="creator"){
          count = count+1;
        }
      }
      return count
    }

    function handleSignup(){
      dispatch(
        signinCourse(
            !signupShow
        )
      )
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
      { field: 'status', headerName: 'Trạng thái', width: 130 },
      { field: 'role', headerName: 'Loại tài khoản', width: 130 },
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
  let userInfor = state.course.account

  var rows = [];
  for(let i=0;i< userInfor.length;i++){
    const infor =
    { id: userInfor[i].ID,
      fullName:userInfor[i].name, 
      userName: userInfor[i].username,
      status:userInfor[i].status, 
      role:userInfor[i].role }
    rows.push(infor)
  }

  return (
    <div className='user_manage manage'>
        <div className='manage__collect'>
            <h3>Danh sách người dùng</h3>
            <ul>
                <li>
                    <p>Tổng số người dùng</p>
                    <p>Số người dùng bị khóa</p>
                    <p>Số người chia sẻ</p>
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
                style={{ width: 1100, margin:"auto" }}
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
                <Button variant="contained" onClick={handleSignup} className="add">Add +</Button>
            </div>
        </div>
        {signupShow ? <Signin></Signin> : ""}
    </div>
  )
}

export default UserManage