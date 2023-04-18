import HomeLayout from "@/components/layouts/homeLayout";
import AuthContext from "@/context/authContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [userLogin,setUserLogin]=useState<boolean>(false);
  const {push}=useRouter()
  const loginHandler=(token:string):void=>{
    Cookies.set("token",token);
    setUserLogin(true);
  }
  const logOutHandler=()=>{
    Cookies.remove("token");
    setUserLogin(false);
    push("/")
  }
  useEffect(()=>{
    setUserLogin(!!Cookies.get("token"))
  },
  [])
  return (

    <AuthContext.Provider
    value={{
      loginHandler,
      userLogined:userLogin,
      logOutHandler
    }}
    >
      <HomeLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </HomeLayout>
    </AuthContext.Provider>
  );
}
