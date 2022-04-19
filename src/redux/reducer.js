
const initialState ={
    todos:[],
    login: false,
    signin: false,
    page: "HOME",
    head: "MAIN",
    add:"",
    edit:"",
    editInfor:"",
};

const courseReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN_COURSE' :
            const login = action.login
            return{
                ...state,
                login: login,
            };

        case 'SIGNIN_COURSE' :
            const signin = action.signin
            return{
                ...state,
                signin: signin,
            };

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

        default:
            return{
                ...state,
            }
    }
};

export default courseReducer;