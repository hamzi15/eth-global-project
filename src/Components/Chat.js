import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import{AiOutlinePlus} from "react-icons/ai";
import { BsCardImage } from 'react-icons/bs';
import { BsCurrencyExchange } from 'react-icons/bs';
import { BsFileEarmark} from 'react-icons/bs';
import Send from './Send';
import { motion } from 'framer-motion';




import { BiSend } from 'react-icons/bi';
import "./assets/css/Chat.css";

function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');
    const [modal, setModal] = useState(false);
    const [curr, setCurr] = useState(false);
    const toggleCurr = () => {
        console.log("clicked")
        setCurr(!curr);
    };
    const toggleModal = () => {
        console.log("clicked")
        setModal(!modal);
        setCurr(false);
    };
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Your type", input);
        setInput('');
    }

    return (
        <div className='chat'>
            
            <div className='chat__header'>
                <Avatar src={`https://robohash.org/${seed}.png`} />
                <div className='chat__headerInfo'style={{color:"#a8b3bd"}}>
                    <h3>Room name</h3>
                   
                </div>
               
            </div>
            <div className='chat__body'>
                
                <p className={`chat__message ${true && 'chat__recevier'}`}>
                    <span className='chat__name'>Haziq</span>
                    Hey guys
                    <span className='chat__timestamp'>3.32pm</span>
                </p>
                {curr &&( <motion.div initial={{y:450}} animate={{y:0,transition:{duration:2}}}><Send /></motion.div>)}
            </div>
            <div className='chat__footer'>
                
                <div className='navi' style={{paddingLeft:"20px"}} >
              
               
                    <AiOutlinePlus className="icon"onClick={toggleModal}/>
                 

                </div>
                {!modal &&(
                <ul style={{opacity:"0",transform:"translateY(30px)",transition:    "2s ease-in-out"}}>
                        
                    </ul>)}
                    {modal &&(
                <motion.ul animate={{transition:{duration:4.5,delay:.8}}}>
                        
                        <motion.li className='list' initial={{opacity:0,y:30}}animate={{opacity:1,y:0,transition:{duration:.8,delay:.15}}}>
                            <a>
                                <span><BsCardImage className="icon" style={{color:"#a8b3bd", paddingLeft: "22px"}}/></span><span></span>
                            </a>
                        </motion.li>
                        <motion.li className='list'initial={{opacity:0,y:50}}animate={{opacity:1,y:0,transition:{duration:.8,delay:.15}}}>
                            <a>
                                <span><BsFileEarmark className="icon" style={{color:"#a8b3bd", paddingLeft: "22px"}}/></span><span></span>
                            </a>
                        </motion.li>
                        <motion.li className='list' initial={{opacity:0,y:100}}animate={{opacity:1,y:0,transition:{duration:.8,delay:.15}}}>
                            <a>
                                <span><BsCurrencyExchange className="icon" style={{color:"#a8b3bd", paddingLeft: "22px"}}onClick={toggleCurr}/></span><span></span>
                            </a>
                        </motion.li>

                    </motion.ul>)}
                
                
                <form style={{width:"40%"}}>
                    <input value={input} onChange={(e) =>
                        setInput(e.target.value)
                    }
                        placeholder='Type a message'
                        type='text' ></input>
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                
                    <BiSend className="icon"style={{paddingLeft:"20px",paddingRight:"20px"}}/>
               
            </div>
            <div className='indicator'></div>
        </div>
    );
}

export default Chat;
/*  <ul>
                        
                        <li className='list'>
                            <a>
                                <span><BsCardImage className="icon" style={{color:"#a8b3bd"}}/></span><span>Pictures</span>
                            </a>
                        </li>
                        <li className='list'>
                            <a>
                                <span><BsFileEarmark className="icon" style={{color:"#a8b3bd"}}/></span><span>Documents</span>
                            </a>
                        </li>
                        <li className='list'>
                            <a>
                                <span><BsCurrencyExchange className="icon" style={{color:"#a8b3bd"}}/></span><span>Wallet</span>
                            </a>
                        </li>

                    </ul>*/