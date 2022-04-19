
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

const showHeader = (head) =>({
    type: 'SHOW_HEADER',
    head: head,
})

const showAdd = (add) =>({
    type: 'SHOW_ADD',
    add: add,
})

export {loginCourse, signinCourse, showPage, showHeader,showAdd}