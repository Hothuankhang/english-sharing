
const initialState ={
    todos:[],
    login: false,
    signin: false,
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


        default:
            return{
                ...state,
            }
    }
};

export default courseReducer;