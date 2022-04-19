import { Close } from '@mui/icons-material'
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import {useDispatch} from "react-redux"
import '../../assets/scss/adminStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import { showAdd} from '../../redux/action'

function AddCategory() {
  // const state = useSelector((state)=>({...state}));
  const dispatch = useDispatch();
  // const add = state.course.add

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
              <form action="submit" className='infor'
              //  onSubmit={handleSubmit}
               >
                <img src={Logo} alt="logo" />
                  <h1>Thêm danh mục</h1>
                  <TextField className="infor__pass infor__input" label="Tên danh mục" variant="outlined" autoComplete="true" 
                  // value={name}
                  // onChange={(e)=> setName(e.target.value)}
                  />
                  <Button className='infor__btn' variant="contained" type='submit'>Thêm</Button>
              </form>
          </div>
  </div>
  )
}

export default AddCategory