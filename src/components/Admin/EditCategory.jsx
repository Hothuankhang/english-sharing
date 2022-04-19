import { Close } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import '../../assets/scss/adminStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import { showEdit} from '../../redux/action'

function EditCategory() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const editInfor = state.course.editInfor
  // const [editStatus, setEditStatus] = useState(editInfor.status);
  const [editType, setEditType] = useState(editInfor.CategoryName);

  // const handleChangeStatus = (event) => {
  //   setEditStatus(event.target.value);
  // }

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
              <form action="submit" className='infor'
              //  onSubmit={handleSubmit}
               >
                <img src={Logo} alt="logo" />
                  <h1>Cập nhật danh mục</h1>
                  <TextField className="infor__pass infor__input" label="" variant="outlined" autoComplete="true" 
                  value={editType}
                  onChange={(e)=> setEditType(e.target.value)}
                  />
                  <Button className='infor__btn' variant="contained" type='submit'>Cập nhật</Button>
              </form>
          </div>
  </div>
  )
}

export default EditCategory