import { projectFirestore } from "../firebase/config";
import { showCategory } from "./action";
const initialState = {
    account: [],
    courseType: [],
    courseList: [],
    lessonList: [],
    userCourse: [],
    login: false,
    signin: false,
    page: "HOME",
    head: "MAIN",
    add: "",
    edit: "",
    editInfor: "",
    showCategory: "",
    showLesson: "",
    comment: []
};

var account = projectFirestore.collection("Account")
account.get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        initialState.account.push({
            ID: doc.id,
            id: doc.data().id,
            name: doc.data().name,
            pass: doc.data().pass,
            role: doc.data().role,
            status: doc.data().status,
            username: doc.data().username
        })
    })
})
var courseType = projectFirestore.collection("CourseType")
courseType.get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        initialState.courseType.push({
            id: doc.id,
            name: doc.data().name,
            adminID: doc.data().adminId,
            status: doc.data().status
        })
    })
})

var courseList = projectFirestore.collection("Courses")
courseList.get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        initialState.courseList.push({
            id: doc.id,
            name: doc.data().name,
            approved: doc.data().approved_day,
            //    cover: doc.data().cover,
            creatorID: doc.data().creatorID,
            creatorName: doc.data().creatorName,
            desc: doc.data().desc,
            status: doc.data().status,
            type: doc.data().type,
            adminID: doc.data().adminID,
            categoryId: doc.data().categoryId,
        })
    })
})

var lessonList = projectFirestore.collection("Lessons")
lessonList.get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        initialState.lessonList.push({
            id: doc.id,
            name: doc.data().name,
            courseId: doc.data().courseId,
            desc: doc.data().desc,
            video_link: doc.data().video_link
        })
    })
})


const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_COURSE':
            const login = action.login

            return {
                ...state,
                login: login,
            };

        case 'LOGIN_CHECK':
            const user = action.username
            const pass = action.pass
            const account = initialState.account
            let courseListId = []
            let userCourseList = []
            let page_role = ""
            let page_header = ""
            let check = ""
            for (let i = 0; i < account.length; i++) {
                if (user === account[i].username &&
                    pass === account[i].pass) {
                    if (account[i].status === "đang hoạt động") {

                        switch (account[i].role) {
                            case "admin":
                                page_role = "ADMIN_MAIN"
                                page_header = "ADMIN"
                                break;
                            case "creator":
                                page_role = "CREATOR_MAIN"
                                page_header = "CREATOR"
                                break;
                            case "user":
                                page_role = "USER_MAIN"
                                page_header = "USER"
                                projectFirestore.collection("UserCourses")
                                    .get().then((snapshot) => {
                                        snapshot.docs.forEach(doc => {
                                            if (doc.data().userId === localStorage.getItem("accountId"))
                                                courseListId.push(
                                                    doc.data().courseId
                                                )
                                        })
                                    })
                                projectFirestore.collection("Courses")
                                    .get().then((snapshot) => {
                                        snapshot.docs.forEach(doc => {
                                            for (let i = 0; i < courseListId.length; i++) {
                                                if (courseListId[i] === doc.id) {

                                                    initialState.userCourse.push(
                                                        {
                                                            id: doc.id,
                                                            desc: doc.data().desc,
                                                            name: doc.data().name
                                                        }
                                                    )
                                                }
                                            }
                                        })
                                    })

                                projectFirestore.collection("Comments")
                                    .get().then((snapshot) => {
                                        snapshot.docs.forEach(doc => {
                                            initialState.comment.push(
                                                doc.data()
                                            )
                                        })
                                    })

                                break;
                            default:
                                console.log("éc")
                        }
                        console.log(account[i])
                        localStorage.setItem('accountId', account[i].ID);
                        localStorage.setItem('accountName', account[i].name);
                        localStorage.setItem('roleName', account[i].role);
                    }
                    else
                        check = "khóa"
                }
            }

            if (page_role !== "") {

                return {
                    ...state,
                    page: page_role,
                    head: page_header,
                };
            }
            else {
                if (check === "khóa") {
                    alert("Tài khoản đã tạm khóa , vui lòng liên lạc với quản trị viên ")
                    return {
                        ...state,
                    };
                }
                else {

                    alert("Tên đăng nhập hoặc mật khẩu sai")
                    return {
                        ...state,
                    };
                }

            }

        case 'SIGNIN_COURSE':
            const signin = action.signin
            return {
                ...state,
                signin: signin,
            };

        case 'SIGNUP_CHECK':
            const name = action.name
            const username = action.username
            const password = action.pass
            const checkAccount = initialState.account
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            const accountList = []
            let checkSame = 0
            let id = 0


            if (regex.test(username)) {
                for (let i = 0; i < checkAccount.length; i++) {
                    if (checkAccount[i].username === username) {
                        alert("Email đã được sử dụng , mời nhập email khác")
                        checkSame = 1
                    }
                    else
                        if (id <= checkAccount[i].id) {
                            id = checkAccount[i].id + 1
                            console.log(id)
                        }
                        else {
                            console.log(id)
                        }

                }

                if (checkSame === 0) {
                    projectFirestore.collection("Account").add({
                        id: id,
                        pass: password,
                        role: "user",
                        status: "đang hoạt động",
                        username: username,
                        name: name
                    })
                    projectFirestore.collection("Account")
                        .get().then((snapshot) => {
                            snapshot.docs.forEach(doc => {
                                accountList.push({
                                    ID: doc.id,
                                    id: doc.data().id,
                                    name: doc.data().name,
                                    pass: doc.data().pass,
                                    role: "user",
                                    status: "đang hoạt động",
                                    username: doc.data().username
                                })
                            })
                        })
                    alert("Đăng kí hành công")
                    return {
                        ...state,
                        account: accountList,
                    };
                }
            }
            else {
                alert("Email không đúng cú pháp")
                return {
                    ...state,
                };
            }
            break;
        case 'SHOW_PAGE':
            const page = action.page
            return {
                ...state,
                page: page,
            };

        case 'SHOW_HEADER':
            const head = action.head
            return {
                ...state,
                head: head,

            };

        case 'SHOW_ADD':
            const add = action.add
            return {
                ...state,
                add: add,
            };

        case 'SHOW_EDIT':
            const edit = action.edit
            const editInfor = action.editInfor
            return {
                ...state,
                edit: edit,
                editInfor: editInfor,
            };

        case 'EDIT_USER':
            const editID = action.editId
            const newStatus = action.editStatus
            const newType = action.editType
            const editAccount = initialState.account
            const newEditAccount = []
            console.log(editID)
            projectFirestore.collection("Account").doc(editID).update({
                status: newStatus,
                role: newType
            })

            // for (let i = 0; i < editAccount.length; i++) {
            //     if (editID === editAccount[i].ID) {
            //         editAccount[i].status = newStatus
            //         editAccount[i].role = newType
            //     }
            // }
            projectFirestore.collection("Account")
            .get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    newEditAccount.push({
                        ID: doc.id,
                        id: doc.data().id,
                        name: doc.data().name,
                        pass: doc.data().pass,
                        role: doc.data().role,
                        status: doc.data().status,
                        username: doc.data().username
                    })
                })
            })
            return {
                ...state,
                account: newEditAccount,
            }
        case 'DELETE_USER':
            const delID = action.deleteId
            const delAccount = initialState.account
            for (let i = 0; i < delID.length; i++) {
                projectFirestore.collection("Account").doc(delID[i]).delete()
            }
            for (let i = 0; i < initialState.account.length; i++) {
                for (let j = 0; j < delID.length; j++) {
                    if (delAccount[i].ID === delID[j]) {
                        delAccount.splice(i, 1)
                    }
                }
            }
            return {
                ...state,
                account: delAccount,
            }
        case "SHOW_CATEGORY":
            const show = action.show
            const editCategoryInfor = action.editInfor
            return {
                ...state,
                editInfor: editCategoryInfor,
                showCategory: action.show
            }

        case "ADD_CATEGORY":
            const categoryName = action.name
            const adminId = action.adminID
            const categoryList = initialState.courseType
            const newCategoryList = []
            let checkExist = 0
            for (let i = 0; i < categoryList.length; i++) {
                if (categoryName === categoryList[i].name) {
                    alert("Danh mục này đã tồn tại")
                    checkExist = 1
                }
            }
            if (checkExist === 0) {
                projectFirestore.collection("CourseType").add({
                    adminId: adminId,
                    name: categoryName,
                    status: "rỗng"
                })
                projectFirestore.collection("CourseType")
                    .get().then((snapshot) => {
                        snapshot.docs.forEach(doc => {
                            newCategoryList.push({
                                id: doc.id,
                                name: doc.data().name,
                                adminID: doc.data().adminID,
                                status: doc.data().status
                            })
                        })
                    })

                return {
                    ...state,
                    courseType: newCategoryList
                }

            }
            else
                return {
                    ...state,
                }

        case "DELETE_CATEGORY":
            const delCategoryID = action.deleteId
            const delCategory = initialState.courseType
            for (let i = 0; i < delCategoryID.length; i++) {
                projectFirestore.collection("CourseType").doc(delCategoryID[i]).delete()
            }
            for (let i = 0; i < delCategory.length; i++) {
                for (let j = 0; j < delCategoryID.length; j++) {
                    if (delCategory[i].id === delCategoryID[j]) {
                        delCategory.splice(i, 1)
                    }
                }
            }
            return {
                ...state,
                courseType: delCategory,
            }

        case 'EDIT_CATEGORY':
            const categoryID = action.editId
            const newName = action.editName
            const editCategory = initialState.courseType
            const editCourseType = initialState.courseList
            const newCategory = []
            const newCourseType = []
            projectFirestore.collection("CourseType").doc(categoryID).update({
                name: newName
            })

            for (let i = 0; i < editCourseType.length; i++) {
                if (editCourseType[i].categoryId === categoryID) {
                    projectFirestore.collection("Courses").doc(editCourseType[i].id).update({
                        type: newName
                    })
                }
            }

            projectFirestore.collection("CourseType")
                .get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        newCategory.push({
                            id: doc.id,
                            name: doc.data().name,
                            adminID: doc.data().adminId,
                            status: doc.data().status
                        })
                    })
                })

            projectFirestore.collection("Courses")
                .get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        newCourseType.push({
                            id: doc.id,
                            name: doc.data().name,
                            approved: doc.data().approved_day,
                            //    cover: doc.data().cover,
                            creatorID: doc.data().creatorID,
                            creatorName: doc.data().creatorName,
                            desc: doc.data().desc,
                            status: doc.data().status,
                            type: doc.data().type,
                            adminID: doc.data().adminID,
                            categoryId: doc.data().categoryId,
                        })
                    })
                })

            return {
                ...state,
                courseType: newCategory,
                courseList: newCourseType,
                showCategory: ""
            }

        case "COURSE_APPROVE":
            const approvedList = initialState.courseList
            projectFirestore.collection("Courses").doc(action.approveId).update({
                approved_day: Date(Date.now()),
                adminID: action.adminId,
                status: "đã duyệt"
            })
            for (let i = 0; i < approvedList.length; i++) {
                if (action.approveId === approvedList[i].id) {
                    approvedList[i].adminID = action.adminId
                    approvedList[i].approved = Date(Date.now())
                    approvedList[i].status = "đã duyệt"
                }
            }
            return {
                ...state,
                courseList: approvedList
            }

        case "ADD_COURSE":
            const updateCourseList = initialState.courseList
            let checkCourseExits = 0
            const newCourse = []
            for (let i = 0; i < updateCourseList.length; i++) {
                if (action.name === updateCourseList[i].name) {
                    checkCourseExits++
                }
            }
            if (checkCourseExits === 0) {
                projectFirestore.collection("Courses").add({
                    adminID: "",
                    approved_day: "",
                    create_day: Date(action.create_day),
                    categoryId: action.categoryId,
                    creatorID: action.creatorID,
                    creatorName: action.creatorName,
                    desc: action.desc,
                    name: action.name,
                    type: action.category,
                    status: "chưa duyệt",
                })
                projectFirestore.collection("Courses")
                    .get().then((snapshot) => {
                        snapshot.docs.forEach(doc => {
                            newCourse.push({
                                create_day: doc.data().create_day,
                                id: doc.id,
                                name: doc.data().name,
                                approved: doc.data().approved_day,
                                //    cover: doc.data().cover,
                                creatorID: doc.data().creatorID,
                                creatorName: doc.data().creatorName,
                                desc: doc.data().desc,
                                status: doc.data().status,
                                type: doc.data().type,
                                adminID: doc.data().adminID,
                                categoryId: doc.data().categoryId
                            })
                        })
                    })
                return {
                    ...state,
                    courseList: newCourse
                }
            }
            else {
                alert("Khóa học này đã tồn tại")
                return {
                    ...state,
                }

            }
        case "COURSE_DELETE":
            const delCourseID = action.deleteId
            const delCourse = initialState.courseList
            for (let i = 0; i < delCourseID.length; i++) {
                projectFirestore.collection("Courses").doc(delCourseID[i]).delete()
            }
            for (let i = 0; i < delCourse.length; i++) {
                for (let j = 0; j < delCourseID.length; j++) {
                    if (delCourse[i].id === delCourseID[j]) {
                        delCourse.splice(i, 1)
                    }
                }
            }
            return {
                ...state,
                courseList: delCourse
            }

        case 'COURSE_EDIT':
            const courseID = action.editId
            const courseName = action.editName
            const categoryId = action.categoryId
            const categoryEditName = action.categoryName

            const newCourseEdit = []
            const newLessonEdit = []

            projectFirestore.collection("Courses").doc(courseID).update({
                name: courseName,
                type: categoryEditName,
                categoryId: categoryId

            })

            projectFirestore.collection("Courses")
                .get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        newCourseEdit.push({
                            id: doc.id,
                            name: doc.data().name,
                            approved: doc.data().approved_day,
                            //    cover: doc.data().cover,
                            creatorID: doc.data().creatorID,
                            creatorName: doc.data().creatorName,
                            desc: doc.data().desc,
                            status: doc.data().status,
                            type: doc.data().type,
                            adminID: doc.data().adminID,
                            categoryId: doc.data().categoryId,
                        })
                    })
                })

            return {
                ...state,
                courseList: newCourseEdit,
            }

        case "LESSON__ADD":
            const updateLessonList = initialState.lessonList
            let checkLessonExits = 0
            const newList = []
            let getnewItem = ''
            for (let i = 0; i < updateLessonList.length; i++) {
                if (action.name === updateLessonList[i].name) {
                    checkLessonExits++
                }
            }
            if (checkLessonExits === 0) {
                projectFirestore.collection("Lessons").add({
                    name: action.name,
                    courseId: action.courseId,
                    desc: action.desc,
                    video_link: action.link
                })
                projectFirestore.collection("Lessons")
                    .get().then((snapshot) => {
                        snapshot.docs.forEach(doc => {
                            newList.push({
                                id: doc.id,
                                name: doc.data().name,
                                courseId: doc.data().courseId,
                                desc: doc.data().desc,
                                video_link: doc.data().video_link
                            })
                        })
                    })

                return {
                    ...state,
                    lessonList: newList,
                }
            }
            else {
                alert("bài học này đã tồn tại")
                return {
                    ...state,
                }

            }

        case "LESSON_DELETE":
            const delLessonId = action.deleteId
            const delLesson = initialState.lessonList
            for (let i = 0; i < delLessonId.length; i++) {
                projectFirestore.collection("Lessons").doc(delLessonId[i]).delete()
            }
            for (let i = 0; i < delLesson.length; i++) {
                for (let j = 0; j < delLessonId.length; j++) {
                    if (delLesson[i].id === delLessonId[j]) {
                        delLesson.splice(i, 1)
                    }
                }
            }

            return {
                ...state,
                lessonList: delLesson
            }

        case 'LESSON_EDIT':

            console.log(action)
            let editLesson = []
            projectFirestore.collection("Lessons").doc(action.editId).update({
                name: action.name,
                courseId: action.courseId,
                desc: action.desc,
                video_link: action.link
            })

            projectFirestore.collection("Lessons")
                .get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        editLesson.push({
                            id: doc.id,
                            name: doc.data().name,
                            courseId: doc.data().courseId,
                            desc: doc.data().desc,
                            vide_link: doc.data().video_link
                        })
                    })
                })
            return {
                ...state,
                lessonList: editLesson
            }

        case 'USER_COURSE':
            const userList = initialState.userCourse
            projectFirestore.collection("UserCourses").add({
                courseId: action.courseId,
                userId: action.userId,
                time: action.time
            })
            for (let i = 0; i < initialState.courseList.length; i++) {
                if (initialState.courseList[i].id === action.courseId) {
                    userList.push(initialState.courseList[i]
                    )
                }
            }


            return {
                ...state,
                userCourse: userList,
            }

        case 'FETCH_USER_COURSE':
            //     let courseListId = []
            //     let userCourseList = []
            //     projectFirestore.collection("UserCourses")
            //     .get().then((snapshot)=>{
            //         snapshot.docs.forEach(doc =>{
            //             if(doc.data().userId === action.userId)
            //             courseListId.push(
            //         doc.data().courseId
            //     )
            //     })
            // })
            // console.log(courseListId)
            // projectFirestore.collection("Courses")
            //     .get().then((snapshot)=>{
            //         snapshot.docs.forEach(doc =>{
            //             for(let i = 0 ;i< courseListId.length;i++){
            //                 if(courseListId[i] === doc.id){

            //                     userCourseList.push(doc.data())
            //                 }
            //             }
            //     })
            // })
            // console.log(userCourseList)
            return {
                ...state,
                userCourse: userCourseList,
            }

        case 'CHECK':
            console.log(action)
            break;


        default:
            return {
                ...state,
            }
    }
};

export default courseReducer;