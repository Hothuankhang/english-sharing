import { Close } from '@mui/icons-material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import '../../assets/scss/adminStyle/style.css'
import Logo from '../../assets/img/UTE.png'
import { editUser, showEdit } from '../../redux/action'
import Button from '@mui/material/Button';

function EditUser() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const editInfor = state.course.editInfor
  const [editStatus, setEditStatus] = useState(editInfor.status);
  const [editType, setEditType] = useState(editInfor.role);

  
  const handleChangeStatus = (event) => {
    setEditStatus(event.target.value);
  }

  const handleChangeType = (event) => {
    setEditType(event.target.value);
  }

  function handleEdit(){
    dispatch(
      editUser(
        editInfor.id,
        editStatus,
        editType
      )
    )
  }
  function handleCancel() {
    dispatch(
      showEdit(
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
        <Box sx={{ minWidth: 120 }} className="infor__pass infor__input infor">
          <img src={Logo} alt="logo" />
          <h1>Cập nhật thông tin người dùng</h1>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >

            <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={editStatus}
              label="Trạng thái"
              onChange={handleChangeStatus}
            >
              <MenuItem value={"active"}>active</MenuItem>
              <MenuItem value={"lock"}>lock</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

            <InputLabel id="demo-simple-select-label">Loại tài khoản</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={editType}
              label="Loại tài khoản"
              onChange={handleChangeType}
            >
              <MenuItem value={"admin"}>admin</MenuItem>
              <MenuItem value={"user"}>user</MenuItem>
              <MenuItem value={"creator"}>creator</MenuItem>
            </Select>
          </FormControl>
          <Button className='infor__btn' 
          variant="contained" 
          type='submit'
          onClick={handleEdit}
          >Cập nhật</Button>
        </Box>
      </div>
    </div>
  )
}

export default EditUser