import React from 'react'

export default function Header() {
    const headerStyle={
        color:'grey',
        fontSize:'60px',
        margin:'auto',
        display:'flex',
    }
  return (
    <div style={{padding:'20px',width:'100%',display:'flex',justifyContent:'center'}}>
      <p style={headerStyle}>todos</p>
    </div>
  )
}
