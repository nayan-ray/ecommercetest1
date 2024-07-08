import { createContext, useEffect, useReducer } from "react"


const INITIALSSTATE = {
    user : JSON.parse(localStorage.getItem("user")) || null,
    isFetching : false,
    isError : false,
}

const Reducer = (state, action)=>{
    switch (action.type) {
        case "login-start":
            return {
                user : null,
                isFetching : true,
                isError : false,
            };
        case "login-success" :
            return {
                user : action.payload,
                isFetching : false,
                isError : false,
            };

            case "login-failure" :
                return {
                    user : null,
                    isFetching : false,
                    isError : true,
                };
    
        default:
          return state;
    }
}
export const context = createContext(INITIALSSTATE);
  export const ContextProvider = ({children})=>{
           const [state , dispatch] = useReducer(Reducer, INITIALSSTATE);
              useEffect(()=>{
                    localStorage.setItem("user", JSON.stringify(state.user));
              }, [state.user])
            return (
                 <context.Provider value={{user : state.user, isFetching:state.isFetching, isError : state.isError , dispatch}}>
                    {children}
                 </context.Provider>
            )
      }