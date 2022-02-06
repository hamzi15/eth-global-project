import React, { useRef,useEffect, useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import './assets/css/Sidebar.css'
import { FiMoreVertical } from "react-icons/fi";
import { MdDonutLarge } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BsDownload } from 'react-icons/bs';
import SidebarChat from './SidebarChat';
import { BiScan } from 'react-icons/bi';
import db from '../firebases';
import './assets/fonts/ionicons.min.css'
import { BsWallet2 } from 'react-icons/bs';

import avatar from "./assets/images/Avatar.jpeg";
import { useMoralis } from 'react-moralis';
import { useNavigate } from 'react-router-dom';
import Blockie from './WalletConnect/Blockie';


export default function Sidebar({address}) {
  const [rooms, setRooms] = useState([]);
  const [copySuccess, setCopySuccess] = useState('');
  let navigate = useNavigate()
  

  const textAreaRef = useRef(null);
  const Settings=(props)=>{
    return(
      <div className='settings-backdrop'>
      </div>
    )
  }


  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  
    alert(copySuccess);
  };
  
  const walletPage = ()=> {
    navigate('/wallet')
  }


  return (
    <div className='sidebar'>
     
      <div className='sidebar__header'>
      <div className="row g-0" style={{textAlign: "center",paddingLeft: "95px",paddingTop:'30px'}}>
      <img className="rounded-circle " src={<Blockie address={address} size={1} />} style={{ gridRowStart:"2", width: "90px",
    height: "90px",
    borderRadius: "50%",
    overflow: "hidden",
    borderWidth: "3",cursor:"pointer"}}/></div>
  
    
      <div className="row g-0" style={{textAlign: "center",paddingLeft: "91px",paddingTop:'30px'}}>
        <div className='pub'
          
         
          style={{overflow:"hidden",width:"100px",color:"white",fontSize:'14px'}}
        >{address}</div></div>
      
    <Settings>Hello</Settings>
    <span style={{display: "grid",
    textAlign:"center",
    justifyContent: "space-between"
    ,paddingTop:"20px",marginRight:"-30%",padding:"auto",marginLeft:"8%"}}>
    <div style={{paddingLeft: "10px",gridColumn:"1",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#1B4266",color:"#a8b3bd",borderColor:"black",height: "50px",
  width: "40px",
  
  borderRadius: "50%"
  }}>
    <BsWallet2  onClick={walletPage} size={20}  style={{paddingRight:"7px",paddingTop:"14px"}}/><div style={{paddingTop:"20px",marginLeft:"-3px",fontSize:"13px"}}>Wallet</div></div>
    <div style={{paddingLeft: "10px",gridColumn:"2",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#1B4266",color:"#a8b3bd",borderColor:"black",height: "50px",
  width: "40px",
  
  borderRadius: "50%"
  }}>
    <BsDownload size={20}  style={{paddingRight:"7px",paddingTop:"14px"}}/><div style={{paddingTop:"20px",marginLeft:"-9px",fontSize:"13px"}}>Receive</div></div>
    <div style={{paddingLeft: "10px",gridColumn:"3",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#1B4266",color:"#a8b3bd",borderColor:"black",height: "50px",
  width: "40px",
  
  borderRadius: "50%"
  }}>
    <BiScan size={20}  style={{paddingRight:"9px",paddingTop:"15px"}}/><div style={{paddingTop:"18px",marginLeft:"-4px",fontSize:"13px"}}>QR</div></div></span>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <BiSearch size={20} style={{paddingLeft: "10px"}} />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        {rooms.map(rooms=>(
          <SidebarChat key={rooms.id} id={rooms.id}
          name={rooms.data.name}/>
        ))}
      </div>
      
    </div>);
}

