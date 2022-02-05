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

<div className="Pub_Container" >
  
   
  <img src={polygon}style={{height:"400px",width:"400px",imageRendering: "high-quality"}}></img>
  </div>
      <Transfer/>
      </div>
)}