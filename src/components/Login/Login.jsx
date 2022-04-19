import { Close } from '@mui/icons-material'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import '../../assets/scss/addStyle/style.css'
import Logo  from '../../assets/img/UTE.png'
import {loginCourse, signinCourse,showPage, showHeader} from '../../redux/action'

function Login() {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const loginShow = state.course.login
    const signinShow = state.course.signin


    function handleCancel(){
        dispatch(
            loginCourse(
                !loginShow
            )
        )
    }

    function handleSignin(){
        dispatch(
            signinCourse(
                !signinShow
            )
        )
        handleCancel()
    }

    function handleSubmit(e){
        e.preventDefault();

        if(name === "admin" && pass ==="123"){
            dispatch(
                loginCourse(
                    !loginShow
                )
            )
            dispatch(
                showHeader(
                    "ADMIN"
                )
            )
            dispatch(
                showPage(
                    "ADMIN_MAIN"
                )
            )
        }
        else
            console.log(pass)
        
    }

  return (
    <div id='login'>
        <div className="login__form">
            <Close className='infor__close' onClick={handleCancel}></Close>
              <form action="submit" className='infor' onSubmit={handleSubmit}>
                <img src={Logo} alt="logo" />
                  <h1>Đăng nhập</h1>
                  <TextField className="infor__pass infor__input" label="Tên đăng nhập" variant="outlined" autoComplete="true" value={name}
                  onChange={(e)=> setName(e.target.value)}
                  />
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className="infor__pass infor__input">
                    <InputLabel htmlFor="outlined-adornment-password" autoComplete="true">Mật khẩu</InputLabel>
                    <OutlinedInput
                        type= 'password'
                        endAdornment={
                        <InputAdornment position="end">
                        </InputAdornment>
                        }
                        label="Mật khẩu"
                        autoComplete="true"
                        value={pass}
                        onChange={(e)=> setPass(e.target.value)}
                    />
                  </FormControl>
                  <Button className='infor__btn' variant="contained" type='submit'>Đăng nhập</Button>
                  <p>Bạn chưa có tài khoản?  <button onClick={handleSignin}>Đăng kí ngay</button></p>
              </form>
          </div>
  </div>
  )
}

export default Login