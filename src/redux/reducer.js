
const initialState ={
    todos:[],
    login: false,
    signin: false,
    page: "HOME",
    head: "MAIN",
    add:""
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

        default:
            return{
                ...state,
            }
    }
};

export default courseReducer;