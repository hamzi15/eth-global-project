
import Settings from './Components/Settings';
import UI from './Components/UI';
import Wallet from './Components/Wallet';
import Send from './Components/Send';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UI/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
