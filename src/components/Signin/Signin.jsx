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
import {loginCourse, signinCourse, signUpCheck} from '../../redux/action'

function Signin() {
  const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();
    const loginShow = state.course.login
    const signinShow = state.course.signin
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [rePass,setRePass] = useState('')
    const [userName,setUserName] = useState('')


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
    function handleSignup(){
      if(name === "" || userName === "" || pass === ""|| rePass === ""){
        alert("Vui lòng điền đủ toàn bộ thông tin")
      }
      else
          if(pass !== rePass){
            alert("Mật khẩu nhập lại không trùng khớp")
          }
          else{
            dispatch(
              signUpCheck(
                name,
                userName,
                pass,
                rePass
              )
            )
          }


      
  }

  return (
    <div id='login'>
        <div className="login__form">
            <Close className='infor__close' 
            onClick={handleCancel}
            ></Close>
              <form action="/" className='infor'>
                <img src={Logo} alt="logo" />
                  <h1>Đăng kí</h1>
                  <TextField className="infor__fullname infor__input" 
                  label="Tên người dùng" variant="outlined" autoComplete="true"
                  onChange={(e)=> setName(e.target.value)}
                  />
                  <TextField className="infor__name infor__input" 
                  label="Email đăng nhập" variant="outlined" autoComplete="true"
                  onChange={(e)=>setUserName(e.target.value)}
                  />
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
                        onChange={(e)=> setPass(e.target.value)}
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
                        onChange={(e)=> setRePass(e.target.value)}
                    />
                  </FormControl>
                  <Button className='infor__btn' variant="contained" 
                  onClick={handleSignup}
                  >Đăng kí</Button>
                  <p>Bạn đã có tài khoản?  <button 
                  onClick={handleLogin}
                  >Đăng nhập ngay</button></p>
              </form>
          </div>
  </div>
  )
}

export default Signin