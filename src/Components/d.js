import "./assets/css/d.css";
import polygon from "./assets/images/Polygon-Primary-Color-Dark.svg";

export default function D() {
    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }
    return(

<div className="d">

<div className="Pub_Container" >
  
   
  <img src={polygon}style={{height:"400px",width:"400px",imageRendering: "high-quality"}}></img>
  </div>
  <div className="Pub_Container" style={{backgroundColor:"transparent",color:"white",fontSize:"30px"}}> Enter Reciever Address<br/><br/>
  <input style={{background:"none",boxShadow:"none",borderTop:"none",borderRight:"none",borderLeft:"none",borderBottomColor:"white", width:"100%",fontSize:"26px"}}></input>
      </div>
      
      <div className="Pub_Container" style={{backgroundColor:"transparent",color:"white",fontSize:"30px", paddingTop:"100px",textAlign:"center"}}> Enter Amount<br/><br/>
  <input style={{background:"none",boxShadow:"none",borderTop:"none",borderRight:"none",borderLeft:"none",borderBottomColor:"white", width:"100%",fontSize:"px"}}></input>
      </div>    
      </div>)}