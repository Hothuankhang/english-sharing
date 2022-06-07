
const signinCourse = (signin) =>({
    type: 'SIGNIN_COURSE',
    signin: signin,
});

const loginCourse = (login) =>({
    type: 'LOGIN_COURSE',
    login: login,
});

const loginCheck = (username,pass) =>({
    type: 'LOGIN_CHECK',
    username: username,
    pass:pass
});

const signUpCheck = (name,username,pass,repass) =>({
    type: 'SIGNUP_CHECK',
    name:name,
    username: username,
    pass:pass,
    repass:repass
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

const showEdit = (edit,editInfor) =>({
    type: 'SHOW_EDIT',
    edit: edit,
    editInfor: editInfor,
})

const editUser = (id,editStatus, editType)=>({
    type: "EDIT_USER",
    editId: id,
    editStatus: editStatus,
    editType: editType
})

const deleteUser = (id)=>({
    type: "DELETE_USER",
    deleteId: id,
})

const showCategory = (show)=>({
    type: "SHOW_CATEGORY",
    show: show,
})

const addCategory =(name,adminID)=>({
    type: "ADD_CATEGORY",
    name:name,
    adminID:adminID
})

const deleteCategory = (id)=>({
    type: "DELETE_CATEGORY",
    deleteId: id,
})

const addCourse= (create_day,categoryId,creatorID,creatorName,desc,name,type)=>({
    type: "ADD_COURSE",
    create_day: create_day,
    categoryId: categoryId,
    creatorID: creatorID,
    creatorName: creatorName,
    desc: desc,
    name: name,
    category: type,
})

const check = (approved_day,
    )=>({
    type: "CHECK",
    approved_day: approved_day,
})
 
const courseApprove=(approveId, adminId)=>({
    type: "COURSE_APPROVE",
    approveId:approveId,
    adminId:adminId
})

const courseDelete=(deleteId)=>({
    type: "COURSE_DELETE",
    deleteId:deleteId,
})

const lessonAdd=(name,desc,link,courseId)=>({
    type: "LESSON__ADD",
    name:name,
    desc:desc,
    link:link,
    courseId:courseId
})

export {loginCourse, signinCourse, 
    showPage, showHeader,showAdd,
    showEdit,loginCheck,editUser,
    deleteUser,signUpCheck,showCategory,
    addCategory,deleteCategory,
    addCourse,check,courseApprove,
    courseDelete,lessonAdd
}