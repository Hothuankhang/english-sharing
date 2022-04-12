import { Close } from '@mui/icons-material'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import '../../assets/scss/addStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import {loginCourse, signinCourse} from '../../redux/action'

function Signin() {
  const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const loginShow = state.course.login
    const signinShow = state.course.signin


    function handleCancel(){
        dispatch(
          signinCourse(
            !signinShow
          )
        )
    }

    function handleLogin(){
        dispatch(
          loginCourse(
            !loginShow
        )
        )
        handleCancel()
    }

  return (
    <div id='login'>
        <div className="login__form">
            <Close className='infor__close' onClick={handleCancel}></Close>
              <form action="/" className='infor'>
                <img src={Logo} alt="logo" />
                  <h1>Đăng kí</h1>
                  <TextField className="infor__fullname infor__input" label="Tên người dùng" variant="outlined" autoComplete="true"/>
                  <TextField className="infor__name infor__input" label="Tên đăng nhập" variant="outlined" autoComplete="true"/>
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className="infor__pass infor__input">
                    <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                    <OutlinedInput
                        type= 'password'
                        endAdornment={
                        <InputAdornment position="end">
                        </InputAdornment>
                        }
                        label="Mật khẩu"
                        autoComplete="true"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className="infor__pass infor__input">
                    <InputLabel htmlFor="outlined-adornment-password">Nhập lại mật khẩu</InputLabel>
                    <OutlinedInput
                        type= 'password'
                        endAdornment={
                        <InputAdornment position="end">
                        </InputAdornment>
                        }
                        label="Nhập lại mật khẩu"
                        autoComplete="true"
                    />
                  </FormControl>
                  <Button className='infor__btn' variant="contained">Đăng nhập</Button>
                  <p>Bạn đã có tài khoản?  <button onClick={handleLogin}>Đăng nhập ngay</button></p>
              </form>
          </div>
  </div>
  )
}

export default Signin