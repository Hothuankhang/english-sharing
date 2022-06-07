import { projectFirestore } from "../firebase/config"; 
const initialState ={
    account:[],
    courseType:[],
    courseList:[],
    lessonList:[],
    login: false,
    signin: false,
    page: "HOME",
    head: "MAIN",
    add:"",
    edit:"",
    editInfor:"",
    showCategory:"",
};

var account = projectFirestore.collection("Account")
            account.get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                   initialState.account.push({
                       ID:doc.id,
                       id:doc.data().id,
                       name:doc.data().name,
                       pass:doc.data().pass,
                       role:doc.data().role,
                       status:doc.data().status,
                       username:doc.data().username
                   })
                })
            })
var courseType = projectFirestore.collection("CourseType")
            courseType.get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                   initialState.courseType.push({
                       id:doc.id,
                       name:doc.data().name,
                       adminID:doc.data().adminId
                   })
                })
            })

var courseList = projectFirestore.collection("Courses")
            courseList.get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                   initialState.courseList.push({
                       id:doc.id,
                       name:doc.data().name,
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

var lessonList = projectFirestore.collection("Lessons")
            lessonList.get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                   initialState.lessonList.push({
                       id:doc.id,
                       name:doc.data().name,
                       courseId: doc.data().courseId,
                       desc: doc.data().desc,
                       video_link: doc.data().video_link
                   })
                })
            })

const courseReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN_COURSE' :
            const login = action.login
            
            return{
                ...state,
                login: login,
            };

        case 'LOGIN_CHECK' :
            const user = action.username
            const pass = action.pass
            const account = initialState.account
            let page_role=""
            let page_header=""
            for(let i=0;i<account.length;i++){
                if(user === account[i].username && 
                    pass === account[i].pass){
                        switch(account[i].role){
                            case "admin":
                                page_role = "ADMIN_MAIN"
                                page_header="ADMIN"
                                break;
                            case "creator":
                                page_role = "CREATOR_MAIN"
                                page_header="CREATOR"
                                break;
                            case "user":
                                console.log("user")
                                break;
                            default :
                                console.log("éc")    
                        }
                        console.log(account[i])
                        localStorage.setItem('accountId', account[i].ID);
                        localStorage.setItem('accountName', account[i].name);
                }
            }

            if(page_role!==""){
                
                return{
                    ...state,
                    page:page_role,
                    head:page_header
                };
            }
            else{
                alert("Tên đăng nhập hoặc mật khẩu sai")
                    return{
                        ...state,
                    };

            }

        case 'SIGNIN_COURSE' :
            const signin = action.signin
            return{
                ...state,
                signin: signin,
            };

        case 'SIGNUP_CHECK' :
            const name = action.name
            const username = action.username
            const password = action.pass
            const checkAccount = initialState.account
            const regex = /^\w+([\.-]?\w+)*@w+([\.-]?\w+)*(\.\w{2,3})+$/
            let checkSame = 0
            let id= 0

            if(regex.test(username) ){
                for(let i = 0; i< checkAccount.length;i++){
                    if(checkAccount[i].username === username){
                        alert("Email đã được sử dụng , mời nhập email khác")
                        checkSame=1
                    }
                    else
                        if(id<=checkAccount[i].id){
                            id = checkAccount[i].id+1
                            console.log(id)
                        }
                        else {
                            console.log(id)
                        }   
                            
                }
    
                if(checkSame === 0){
                    projectFirestore.collection("Account").add({
                        id:id,
                        pass:password,
                        role: "user",
                        status: "active",
                        username:username,
                        name:name
                    })
                
                    alert("Đăng kí thành công")
                    return{
                        ...state,
                        account: initialState.account.push({
                            id:id,
                            pass:password,
                            role: "user",
                            status: "active",
                            username:username,
                            name:name
                        }),
                        signin:false
                    };
                }
            }
            else{
                alert("Email không đúng cú pháp")
                return{
                    ...state,
                };
            }
            break;
        case 'SHOW_PAGE' :
            const page = action.page
            return{
                ...state,
                page: page,
            };    

        case 'SHOW_HEADER' :
            const head = action.head
            return{
                ...state,
                head: head,
            };        
            
        case 'SHOW_ADD' :
            const add = action.add
            return{
                ...state,
                add: add,
            };

        case 'SHOW_EDIT' :
            const edit = action.edit
            const editInfor = action.editInfor
            return{
                ...state,
                edit: edit,
                editInfor:editInfor,
            }; 

        case 'EDIT_USER':
            const editID = action.editId
            const newStatus = action.editStatus
            const newType = action.editType
            const editAccount =initialState.account
            console.log(editID)
            projectFirestore.collection("Account").doc(editID).update({
                status:newStatus,
                role:newType
            })

            for(let i = 0; i< editAccount.length;i++){
                if(editID === editAccount[i].ID){
                    editAccount[i].status = newStatus
                    editAccount[i].role = newType
                }
            }
            return{
                ...state,
                account: editAccount,
                edit:""
            }
        case 'DELETE_USER':
            const delID = action.deleteId
            const delAccount =initialState.account
            for(let i = 0 ; i< delID.length;i++){
                projectFirestore.collection("Account").doc(delID[i]).delete()
            }
            for(let i = 0; i< initialState.account.length;i++){
                for(let j = 0 ; j< delID.length;j++){
                    if(delAccount[i].ID === delID[j]){
                        delAccount.splice(i,1)
                    }
                }
            }
            return{
                ...state,
                account: delAccount,
            }
        case "SHOW_CATEGORY":
            const show = action.show
            return{
                ...state,
                showCategory:show,
            }

        case "ADD_CATEGORY":
            const categoryName = action.name
            const adminId = action.adminID
            const categoryList = initialState.courseType
            const newCategoryList =[]
            let checkExist = 0
            for(let i=0;i<categoryList.length;i++){
                if(categoryName=== categoryList[i].name){
                    alert("Danh mục này đã tồn tại")
                    checkExist=1
                }
            }
            if(checkExist === 0){
                projectFirestore.collection("CourseType").add({
                    adminId: adminId,
                    name:categoryName
                })
                projectFirestore.collection("CourseType")
                .get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                    newCategoryList.push({
                       id:doc.id,
                       name:doc.data().name,
                       adminID:doc.data().adminID
                   })
                })
            })
            
            return{
                ...state,
                courseType: newCategoryList
            }    
    
            }
            else
            return{
                ...state,
            }    
        
        case "DELETE_CATEGORY":
            const delCategoryID = action.deleteId
            const delCategory =initialState.courseType
            for(let i = 0 ; i< delCategoryID.length;i++){
                projectFirestore.collection("CourseType").doc(delCategoryID[i]).delete()
            }
            for(let i = 0; i< delCategory.length;i++){
                for(let j = 0 ; j< delCategoryID.length;j++){
                    if(delCategory[i].id === delCategoryID[j]){
                        delCategory.splice(i,1)
                    }
                }
            }
            return{
                ...state,
                courseType: delCategory,
            }

        case "COURSE_APPROVE":
            const approvedList = initialState.courseList
            projectFirestore.collection("Courses").doc(action.approveId).update({
                approved_day: Date(Date.now()),
                adminID: action.adminId
            })
            for(let i = 0; i< approvedList.length;i++){
                if(action.approveId === approvedList[i].id){
                    approvedList[i].adminID = action.adminId
                    approvedList[i].approved = Date(Date.now())
                }
            }
            return{
                ...state,
                courseList: approvedList
            }

        case "ADD_COURSE":
            const updateCourseList= initialState.courseList
            let checkCourseExits = 0
            const newCourse = []
            for(let i = 0 ; i< updateCourseList.length;i++){
                if(action.name === updateCourseList[i].name){
                    checkCourseExits++
                }
            }
            if(checkCourseExits === 0){
                projectFirestore.collection("Courses").add({
                    adminID:"",
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
                .get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                    newCourse.push({
                        create_day: doc.data().create_day,
                        id:doc.id,
                       name:doc.data().name,
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
            return{
                ...state,
                courseList:newCourse
            }
            }
            else{
                alert("Khóa học này đã tồn tại")
                return{
                    ...state,
                }

            }
        case "COURSE_DELETE":
            const delCourseID = action.deleteId
            const delCourse =initialState.courseList
            for(let i = 0 ; i< delCourseID.length;i++){
                projectFirestore.collection("Courses").doc(delCourseID[i]).delete()
            }
            for(let i = 0; i< delCourse.length;i++){
                for(let j = 0 ; j< delCourseID.length;j++){
                    if(delCourse[i].id === delCourseID[j]){
                        delCourse.splice(i,1)
                    }
                }
            }
            return{
                ...state,
                courseList:delCourse
            }
        
        case "LESSON__ADD":
            const updateLessonList= initialState.lessonList
            let checkLessonExits = 0
            const newList = []
            for(let i = 0 ; i< updateLessonList.length;i++){
                if(action.name === updateLessonList[i].name){
                    checkLessonExits++
                }
            }
            if(checkLessonExits === 0){
                projectFirestore.collection("Lessons").add({
                    name:action.name,
                    courseId: action.courseId,
                    desc: action.desc,
                    video_link: action.link
                })
                projectFirestore.collection("Lessons")
                .get().then((snapshot)=>{
                snapshot.docs.forEach(doc =>{
                    newList.push({
                        id:doc.id,
                        name:doc.data().name,
                        courseId: doc.data().courseId,
                        desc: doc.data().desc,
                        vide_link: doc.data().vide_link
                   })
                })
            })
            return{
                ...state,
                lessonList:newList
            }
            }
            else{
                alert("Khóa học này đã tồn tại")
                return{
                    ...state,
                }

            }

        case 'CHECK':
            console.log(action)
            break;
        default:
            return{
                ...state,
            }
    }
};

export default courseReducer;