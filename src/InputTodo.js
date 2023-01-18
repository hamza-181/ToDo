import React from 'react'
import Plusbtn from './Plusbtn'
export default function InputTodo() {
    const inputStyle={
        border:'none',
        width:'370px',
        height:'30px',
        borderRadius:'100px',
        padding:"5px 50px 5px 20px",
        boxShadow:'0px 1px 3px 0px',
    }
    const inputdivStyle={
        borderColor:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        width:'370px',
        margin:'auto'
    }
  return (
    <div style={inputdivStyle}>
    <input style={inputStyle} placeholder='Add todo...' ></input> 
    <Plusbtn/>
    </div>
  )
}
