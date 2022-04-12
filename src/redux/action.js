
const signinCourse = (signin) =>({
    type: 'SIGNIN_COURSE',
    signin: signin,
});

const loginCourse = (login) =>({
    type: 'LOGIN_COURSE',
    login: login,
});

export {loginCourse, signinCourse}