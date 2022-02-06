import "./assets/css/Settings.css";
import { BsWallet2 } from 'react-icons/bs';
import { BiScan } from 'react-icons/bi';
import avatar from "./assets/images/Avatar.jpeg";
import { BsDownload } from 'react-icons/bs';
export default function Settings() {

    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }
    return(

<div className="Settings">

      <div className="Image_Container" style={{textAlign: "center",margin:"0 auto", textAlign:"center", paddingTop:"40px", paddingBottom:"40px"}}>
      <img className="rounded-circle " src={avatar} style={{ width: "150px",
    height: "150px",
    borderRadius: "50%"}}/></div>
    <div className="Pub_Container" >
    <div className='pub'style={{width:'400px'}}>
     {address}
    
    </div>
  
   
  <div style={{display:"flex",flex:"0.3",color:"white",fontSize:"40px",paddingLeft:"10%", paddingTop:"100px"}}>Settings

  </div>

  <div className="Pub_Container" style={{paddingTop:"50px"}}>
    <div className='Settings_Container' style={{ borderTopLeftRadius:  "10px",
    borderTopRightRadius:  "10px",color:"white"}}>
     
    Picture
    </div>
    <div className='Settings_Container' >
     
    
    </div>
    <div className='Settings_Container' style={{ borderBottomLeftRadius:  "10px",
    borderBottomRightRadius:  "10px"}}>
     
    
     </div>
    </div>





    </div></div>
  
    
    )
}