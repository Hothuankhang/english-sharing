
const initialState ={
    todos:[],
    login: false,
    signin: false,
    page: "MAIN",
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

        default:
            return{
                ...state,
            }
    }
};

export default courseReducer;