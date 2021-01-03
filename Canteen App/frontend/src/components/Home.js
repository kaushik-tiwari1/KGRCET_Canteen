import React from 'react';
import './customer.css'

export default function Home(){
    
    const handleCustomer = () => {
        window.location.replace("/customer");
    }

    const handleHotel = () => {
       window.location.replace("/register")
    }

    return (
        <div className="bghome">
        <div  style={{ textAlign: "center" ,minWidth: 300, maxWidth: 700,margin: "auto", marginTop: "80px"}}>
            <h2 style={{color: "white"}}>CANTEEN:KGRCET</h2>
           <button style={{display:"block", width: "100%", padding:" 15px 32px",fontSize:"18px", backgroundColor:'black', color: "white", pointer: "cursor", marginBottom: "20px"}} onClick={() => handleHotel()}>Kitchen</button>
           <button style={{display:"block", width: "100%", backgroundColor:'red',color:"white", padding:" 15px 32px",fontSize:"18px", pointerEvents: "cursor"}} onClick={() => handleCustomer()}>Customer</button>
            
        </div>
         
        </div>
    )
}