import { Close } from '@mui/icons-material'
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import '../../assets/scss/adminStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import { addCategory, showAdd} from '../../redux/action'

function AddCategory() {
  // const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  // const add = state.course.add
  const [name,setName] = useState('')
  function handleAdd(){
    console.log(localStorage.getItem('accountId'))
    dispatch(
      addCategory(
        name,
        localStorage.getItem('accountId')
      )
    )
  }

  function handleCancel(){
    dispatch(
      showAdd(
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
              <div  className='infor'
              //  onSubmit={handleAdd}
               >
                <img src={Logo} alt="logo" />
                  <h1>Thêm danh mục</h1>
                  <TextField className="infor__pass infor__input" label="Tên danh mục" variant="outlined" autoComplete="true" 
                  // value={name}
                  onChange={(e)=> setName(e.target.value)}
                  />
                  <Button className='infor__btn' variant="contained" 
                  onClick={handleAdd}
                  >Thêm</Button>
              </div>
          </div>
  </div>
  )
}

export default AddCategory