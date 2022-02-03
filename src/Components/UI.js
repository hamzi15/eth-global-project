import "./assets/css/UI.css";
import Sidebar from './Sidebar';
import Chat from "./Chat";

function UI() {
  return (
    // Ben naming convention
   
      <div className="app_body">
        
        <Sidebar/>
     <Chat/>
    </div>
  );
}

export default UI;