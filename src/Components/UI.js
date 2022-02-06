import "./assets/css/UI.css";
import Sidebar from './Sidebar';
import Chat from "./Chat";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UI() {
  const { isAuthenticated, account, isAuthenticating, isLoggingOut, logout } = useMoralis()
  const [address, setAddress] = useState("......")

  console.log(isAuthenticating, isLoggingOut, isAuthenticated)

  let navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated){
      if (account !== null) setAddress(account.substring(0,6)+". . .")
      else {
        logout()
        navigate('/login')
      }
    }
  },[account,isAuthenticated])

  return (
      <div className="app_body">
        <Sidebar address={address}/> 
        <Chat/>
      </div>
  );
}

export default UI;