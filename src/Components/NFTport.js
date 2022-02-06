import "./assets/css/NFT.css";
import polygon from "./assets/images/Nftport.svg";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function NFT() {
  const [nfts, setNFTs] = useState(null)

    const address="0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }

      const NFT_PORT_AUTH_KEY = '15ca99ab-92b8-442a-a95f-f114cfa49cf5';

  console.log(nfts)
    useEffect(() => {
      if (nfts !== null) return
        var options = {
          method: 'GET',
          url: `https://api.nftport.xyz/v0/accounts/${address}`,
          params: {chain: 'ethereum'},
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${NFT_PORT_AUTH_KEY}`
          }
        };

        axios.request(options)
        .then(response => {
          console.log(response.data)
          setNFTs(response.data.nfts)
        })
        .catch(error=> {
          console.error(error);
        });
      },[])

    return(

<div className="NFT">

<div className="Pub_Container" >
  
   
  <img src={nfts && nfts[0].file_url} style={{height:"400px",width:"400px",imageRendering: "high-quality"}}></img>
  </div>
  <div className="Pub_Container" style={{backgroundColor:"transparent",color:"black",fontSize:"30px",textAlign:"center"}}> Enter Reciever Address<br/><br/>
  <input style={{background:"none",boxShadow:"none",border:"none", width:"80%px",fontSize:"26px",backgroundColor:"#af9e7f", color:"white",height:"80px",borderRadius:"30px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}></input>
      </div>
      
      <div className="Pub_Container" style={{margin:"0 auto",backgroundColor:"transparent",color:"black",fontSize:"30px", paddingTop:"100px",textAlign:"center"}}> Enter NFT<br/><br/>
      <input style={{background:"none",boxShadow:"none",border:"none", width:"80%px",fontSize:"26px",backgroundColor:"#af9e7f", color:"white",height:"80px",borderRadius:"30px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}></input>
      </div>    
      </div>)}