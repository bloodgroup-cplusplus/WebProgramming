import {createContext, useReducer} from 'react'

export const AuthContext = createContext()

export const authReducer=(state,action)=>{
    switch (action.type){
        case 'LOGIN':
            return {...state, user:action.payload}

        case'LOGOUT':
            return {...state,user:null}

        default: return state
    }
}


// create custom auth provider context 

export const AuthContextProvider = ({children}) =>{
    // create a reducer function and state for that 
    const [state,dispatch] = useReducer(authReducer,{
        user:null
    })
    console.log('AuthContext State:',state)






    // return the template 
    // return the auth context 
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>

    )

}