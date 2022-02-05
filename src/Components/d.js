import "./assets/css/d.css";
import polygon from "./assets/images/Polygon-Primary-Color-Dark.svg";
import Transfer from "./Transfer/Transfer";

export default function D() {
    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }
    return(

<div className="d">


      <Transfer/>
      <div className="Pub_Container" style={{display:"flex",textAlign:"center",alignItems:"center"}}>
  
  <div> Powered by:</div>
  <img src={polygon}style={{height:"150px",width:"150px",imageRendering: "high-quality", margin:"0 auto"}}></img>
  </div>
      </div>
)}