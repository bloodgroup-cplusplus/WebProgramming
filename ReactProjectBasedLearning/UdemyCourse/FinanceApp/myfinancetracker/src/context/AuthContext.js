import {createContext,useReducer} from "react"


// create contenxt used to crate context 
// use reducers 



export const AuthContext = createContext()

export const authReducer = (state,action) =>{
    // we weould do a switch to check action type 
    // wehen we dispatch an action we do someting like 
    // dispatch(action)

    switch(action.type)
    {
        case 'LOGIN':
            // when we dispatch a login action we returning a new object to return our stae
            // update the user property but the payload
            // we need to dispatch this action from somewhere
            return {...state,user:action.payload}


        case 'LOGOUT':
            return {...state,user:null}

        default:
            return state

    }
}


export const AuthContextProvider = ({children}) =>{
    // return the template and inside the template we want to return the autx context 
    // 
    const [state,dispatch] = useReducer (authReducer,{
        user:null
    })
    console.log("Auth context state:",state)

    // dispatch used to update the context value 
    return (
        <AuthContext.Provider value = {{...state,dispatch}}>
            {children}
            </AuthContext.Provider>
    )
}