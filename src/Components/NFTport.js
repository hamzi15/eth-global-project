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
<div style={{margin:"0 auto", fontSize:"40px",padding:"40px",fontWeight:"bolder",color:'white'}}> NFT WALLET</div>
<div className="Pub_Container" style={{padding:"40px"}}>
  
  {nfts && nfts.map((file)=> <div ><hr/><div style={{margin:'0 auto',fontWeight:"bolder",padding:"20px",color:"white"}}>{file.name}</div><div style={{padding:"20px"}}><img src={file.file_url} style={{height:"90px",width:"90px",imageRendering: "high-quality",borderRadius:'50%'}}></img></div></div>)}
   
 
  </div>
      
      </div>)}