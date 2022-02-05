import React, { useEffect } from 'react';
import { Container, Form, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';

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
       <Container 
       className="d-flex align-items-center justify-content-center"
       style={{minHeight:'100vh'}}
       >
        <div className='w-100' style={{maxWidth:'400px'}}>
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Connect or Create Wallet</h2>
                <Button onClick={ handleLogin } className="w-100" type="submit">
                    Connect to wallet
                </Button>
            </Card.Body>
        </Card>
        </>
        </div>
       </Container>
    )
}
export default Login
