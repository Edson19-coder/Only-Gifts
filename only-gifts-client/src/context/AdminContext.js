import { createContext, useCallback, useEffect, useState } from "react"
import Cookies  from "js-cookie";

const Context = createContext();

export function AdminProvider({children}){

    const [user,setUser] = useState(Cookies.get("admin"));
    const [expand,setExpand] = useState(JSON.parse(localStorage.getItem("expand")))
    
    const logOut = useCallback(()=>{
        setUser(null);
        Cookies.remove("admin");
    })

    const logIn = useCallback((user)=>{
        setUser(user);
        Cookies.set("admin",user,{expires:1})
    })

    useEffect(()=>{

        if(expand){
            localStorage.setItem("expand",true)
        }else{
            localStorage.setItem("expand",false)
        }
    },[setExpand,expand])

    return (
            <Context.Provider value={{user,setUser,isLoged:Boolean(user),expand,setExpand,logOut,logIn}}>
                {children}
            </Context.Provider>
    )
}

export default Context;