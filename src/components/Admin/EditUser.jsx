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
import { showEdit } from '../../redux/action'
import Button from '@mui/material/Button';

function EditUser() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const editInfor = state.course.editInfor
  const [editStatus, setEditStatus] = useState(editInfor.status);
  const [editType, setEditType] = useState(editInfor.type);

  const handleChangeStatus = (event) => {
    setEditStatus(event.target.value);
  }

  const handleChangeType = (event) => {
    setEditType(event.target.value);
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
              <MenuItem value={"bình thường"}>Bình thường</MenuItem>
              <MenuItem value={"tạm khóa"}>Tạm khóa</MenuItem>
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
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"creator"}>Creator</MenuItem>
            </Select>
          </FormControl>
          <Button className='infor__btn' variant="contained" type='submit'>Cập nhật</Button>
        </Box>
      </div>
    </div>
  )
}

export default EditUser