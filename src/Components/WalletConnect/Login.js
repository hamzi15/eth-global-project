import React, { useEffect } from 'react';
import { Container, Form, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import fox from "./WalletIcons/metamaskWallet.png"
const Login = () => {
    const { authenticate, isAuthenticated, logout } = useMoralis();
    let navigate = useNavigate()

    useEffect(()=> {
      //const connectorId = window.localStorage.getItem("connectorId");
      if (isAuthenticated){
        navigate('/')
      }
    },[isAuthenticated])

    const handleLogin = () => {
      authenticate()
    }

    return (
       <div
       
       style={{height:'100vh',width:"100vw",display:"flex",backgroundColor:"#041c31"}}
       >
        <div  style={{
          marginTop:"100px",height:'400px',width:'400px',margin:"0 auto",backgroundColor:"#1B4266",padding:"20px"}}>
        <>
        <div>
            <div>
                <div style={{textAlign:"center",color:"white",fontSize:"36px",fontWeight:"bold",fontFamily:"inherit",borderRadius:"30px",padding:"20px",backgroundColor:"#14304b"}}>Connect Your Wallet</div>
                <div onClick={ handleLogin } className="w-100" type="submit"style={{padding:"5px",marginTop:"190px",borderRadius:"30px",textAlign:"center",backgroundColor:"#041c31",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>
                   <img src={fox}></img>
                </div>
            </div>
        </div>
        </>
        </div>
       </div>
    )
}
export default Login
