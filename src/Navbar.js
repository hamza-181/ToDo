import React from 'react'

export default function Navbar() {
    const nav={
        backgroundColor:'green',
        width:"25vw",
        display:'flex',
        flexDirection:'column',
       
    }
 
  return (
    <div style={nav}>
      <button style={{width:"30px",background:"transparent",border:"none",color:'white',margin:'20px'}}>X</button>
      <a style={{color:'#D35400',margin:'20px 10px 10px 20px'}} href="url">Home</a>
      <a  style={{color:'#48C9B0',margin:'10px 20px 20px 20px'}}href="url">About</a>
    </div> 
  )
}
