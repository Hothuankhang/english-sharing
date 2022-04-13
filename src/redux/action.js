
const signinCourse = (signin) =>({
    type: 'SIGNIN_COURSE',
    signin: signin,
});

const loginCourse = (login) =>({
    type: 'LOGIN_COURSE',
    login: login,
});


const showPage = (page) =>({
    type: 'SHOW_PAGE',
    page: page,
})


export {loginCourse, signinCourse, showPage}