

export default function Result(prop){
    return(<div
       
    style={{ display: "flex",
        flexDirection: "column",
        flex:"1",
        
    
    
       
        backgroundColor:  "White",
        border:"8px solid black",
        
        margin:"0px",
        width:" 100%",height: "60vh",fontFamily:"monospace"}}
    ><span style={{padding:"20px",textAlign:"center",fontWeight:"bold",fontSize:"30px",}}>INVOICE</span>
    <div style={{padding:"20px"}}>To: {prop.result.to}<br/> <br/>From: {prop.result.from} <br/><br/><br/>Transaction Hash: {prop.result.hash}</div>
    
    </div>)
}