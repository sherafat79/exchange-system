import {createContext} from "react";
 const AuthContext = createContext({
    loginHandler:(token:string)=>{},
    logOutHandler:()=>{},
    userLogined:false
})
export default AuthContext;