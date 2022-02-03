import "./assets/css/Wallet.css";
import { BsWallet2 } from 'react-icons/bs';
import { BiScan } from 'react-icons/bi';
import avatar from "./assets/images/Avatar.jpeg";
import { BsDownload } from 'react-icons/bs';
import eth from "./assets/images/eth.webp";
import bit from "./assets/images/bitcoin.png";
import bnb from "./assets/images/bnb.png";
export default function Wallet() {
    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }
    return(

<div className="Wallet">

      <div className="Image_Container" style={{textAlign: "center",margin:"0 auto", textAlign:"center", paddingTop:"40px", paddingBottom:"40px"}}>
      <img className="rounded-circle " src={avatar} style={{ width: "150px",
    height: "150px",
    borderRadius: "50%"}}/></div>
    <div className="Pub_Container">
    <div className='public'>
     {address}
    <br/>Portfolio:<br/>$100
    </div>
   <div className="button_Container" style={{paddingTop:"40px"}}>
    <div style={{display:"flex",margin:"0 auto", textAlign:"center",justifyContent:"space-evenly"}}>
    <div style={{paddingLeft: "10px",gridColumn:"1",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#1B4266",color:"white",borderColor:"black",height: "50px",
  width: "40px",
  
  borderRadius: "50%"
  }}>
    <BsWallet2  size={20}  style={{paddingRight:"7px",paddingTop:"14px"}}/><div style={{paddingTop:"20px",marginLeft:"-9px",fontSize:"13px"}}>Send</div></div>
    <div style={{paddingLeft: "10px",gridColumn:"2",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#1B4266",color:"white",borderColor:"black",height: "50px",
  width: "40px",
  
  borderRadius: "50%"
  }}>
    <BsDownload size={20}  style={{paddingRight:"8px",paddingTop:"14px"}}/><div style={{paddingTop:"20px",marginLeft:"-9px",fontSize:"13px"}}>Receive</div></div>
    <div style={{paddingLeft: "10px",gridColumn:"3",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#1B4266",color:"white",borderColor:"black",height: "50px",
  width: "40px",
  
  borderRadius: "50%"
  }}>
    <BiScan size={20}  style={{paddingRight:"9px",paddingTop:"15px"}}/><div style={{paddingTop:"18px",marginLeft:"-4px",fontSize:"13px"}}>QR</div></div></div></div>

   
  <div style={{display:"flex",flex:"0.3",color:"white",fontSize:"40px",paddingLeft:"10%", paddingTop:"100px"}}>Tokens

  </div>

  <div className="Pub_Container" style={{paddingTop:"50px"}}>
    <div className='Wallet_Container' style={{ borderTopLeftRadius:  "10px",
    borderTopRightRadius:  "10px",color:"white",alignItems:"center"}}>
    <img src={bit}style={{height:"30px",width:"30px",imageRendering: "high-quality",paddingRight:"9px"}}></img>BTC
    
    
    </div>
    <div className='Wallet_Container' style={{color: "white",alignItems:"center"}}>
    <img src={bnb}style={{height:"30px",width:"30px",imageRendering: "high-quality",paddingRight:"9px"}}></img>BNB
    
    
    </div>
    <div className='Wallet_Container' style={{ 
 borderBottomLeftRadius:  "10px",
 borderBottomRightRadius:  "10px",alignItems:"center"}}>
  <img src={eth}style={{height:"30px",width:"25px",imageRendering: "high-quality",paddingRight:"15px"}}></img>ETH
  
     </div>
    </div>




  <div style={{display:"flex",flex:"0.3",color:"white",fontSize:"40px",paddingLeft:"10%", paddingTop:"100px"}}>NFTs

</div>

<div className="Pub_Container" style={{paddingTop:"50px"}}>
  <div className='Wallet_Container' style={{ borderTopLeftRadius:  "10px",
  borderTopRightRadius:  "10px",color:"white"}}>
   
  Picture
  </div>
  <div className='Wallet_Container' >
   
  
  </div>
  <div className='Wallet_Container' style={{ borderBottomLeftRadius:  "10px",
  borderBottomRightRadius:  "10px"}}>
   
  
   </div>
  </div>
    





    </div></div>
  
    
    )
}