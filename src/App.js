
import Settings from './Components/Settings';
import UI from './Components/UI';
import Login from './Components/WalletConnect/Login';
import Wallet from './Components/Wallet';
import Send from './Components/Send';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useMoralis } from "react-moralis"
import { useEffect } from 'react';

function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<UI/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
