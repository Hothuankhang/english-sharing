import React from 'react'
import { Search } from '@mui/icons-material'
import Logo from '../../assets/img/UTE.png'
import '../../assets/scss/homeStyle/style.css'
// import {showPage} from '../../redux/action'
import { Avatar } from '@mui/material'

import { useSelector, useDispatch } from "react-redux"

import { showPage, showHeader, userCourse, fecthUserCourse } from '../../redux/action'
import '../../assets/scss/homeStyle/style.css'
import Homebody from '../Home/Homebody'

import ListCourse from '../Course/ListCourse'
import Course from '../Course/Course'
import UserCourse from './UserCourse'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function UserHeader() {
  const state = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const page = state.course.page
  const add = state.course.add
  const edit = state.course.edit
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleLogout() {
    window.location.reload(false);
    localStorage.clear()
    dispatch(
      showHeader(
        'MAIN'
      )
    )

    dispatch(
      showPage(
        'HOME'
      )
    )
  }
  function handleShowList() {
    dispatch(
      showPage(
        'LIST'
      )
    )
  }

  function handleShowListCourse() {
    dispatch(
      showPage(
        'USER_COURSE'
      )
    )

    // dispatch(
    //   fecthUserCourse(
    //     localStorage.getItem("accountId")
    //   )
    // )
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // dispatch(
    //   fecthUserCourse(
    //     localStorage.getItem("accountId")
    //   )
    // )
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='english__course'>
      <div className='navbar'>
        {/* ICON */}
        <div className='navbar__logo'>
          <p className="logo" >
            <img src={Logo} alt="logo" />
          </p>
          <h4>UTEnglish</h4>
        </div>

        {/* SEARCH */}
        {/* <div className='navbar__search'>
          <div className="search__bar">
            <div className="icon">
              <Search></Search>
            </div>

            <input className="search__input"
              spellCheck="false"
              placeholder="Tìm kiếm khóa học, bài viết, video, ...">
            </input>
          </div>
        </div> */}

        {/* LOGIN */}
        <div className='navbar__btn'>
          <button className='courses sign_up' onClick={handleShowList} >Khóa học</button>
          <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 50, height: 50}}>{localStorage.getItem("accountName")}</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleShowListCourse}>
                <Avatar /> Danh sách khóa học
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon >
                  <Logout fontSize="small" />
                </ListItemIcon>
                Đăng xuất
              </MenuItem>
            </Menu>
          </React.Fragment>
        </div>
      </div>
      {(() => {
        switch (page) {
          case 'HOME':
            return <Homebody />

          case 'LIST':
            return <ListCourse />

          case 'COURSE':
            return <Course />

          case 'USER_COURSE':
            return <UserCourse/>

          default:
            return <Homebody />
        }
      })()}

    </div>
  )
}

export default UserHeader