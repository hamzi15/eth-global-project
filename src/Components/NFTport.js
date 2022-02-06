import "./assets/css/NFT.css";
import polygon from "./assets/images/Nftport.svg";
import {} from "node-fetch"
import { useState } from "react";

export default function NFT() {
  const [nfts, setNFTs] = useState()

    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }

      const NFT_PORT_AUTH_KEY = '15ca99ab-92b8-442a-a95f-f114cfa49cf5';


    const fetchNFTs = () => {
      let url = `https://api.nftport.xyz/v0/accounts/${address}`;

      let options = {
        method: 'GET',
        qs: {chain: 'ethereum'},
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${NFT_PORT_AUTH_KEY}`
        }
      };

      fetch(url, options)
        .then(res => setNFTs((res.json()).nfts))
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
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