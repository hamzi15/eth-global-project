import "./assets/css/NFT.css";
import polygon from "./assets/images/Nftport.svg";

export default function NFT() {
    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }
    return(

<div className="NFT">

<div className="Pub_Container" >
  
   
  <img src={polygon}style={{height:"400px",width:"400px",imageRendering: "high-quality"}}></img>
  </div>
  <div className="Pub_Container" style={{backgroundColor:"transparent",color:"black",fontSize:"30px",textAlign:"center"}}> Enter Reciever Address<br/><br/>
  <input style={{background:"none",boxShadow:"none",border:"none", width:"80%px",fontSize:"26px",backgroundColor:"#af9e7f", color:"white",height:"80px",borderRadius:"30px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}></input>
      </div>
      
      <div className="Pub_Container" style={{margin:"0 auto",backgroundColor:"transparent",color:"black",fontSize:"30px", paddingTop:"100px",textAlign:"center"}}> Enter NFT<br/><br/>
      <input style={{background:"none",boxShadow:"none",border:"none", width:"80%px",fontSize:"26px",backgroundColor:"#af9e7f", color:"white",height:"80px",borderRadius:"30px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}></input>
      </div>    
      </div>)}