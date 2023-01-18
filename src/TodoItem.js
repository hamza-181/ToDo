import React from 'react'
import Suppbtn from'./Suppbtn'
export default function TodoItem(props) {
const todoStyle={
    inputChecked:'',
    display:"flex",
    width:"370px",
    alignItems:'center',
    height:"30px",

}
const mrg={
    margin:'0 5px 0 0'
}
  return (
    <div style={todoStyle}>
      {/* <input type="checkbox" /> */}
      {props.checked? <input style={mrg} type="checkbox" checked/> : <input style={mrg} type="checkbox" />}
<label style={props.checked?{textDecoration:'line-through'}:null}> {props.name}</label>	

      <Suppbtn/>
    </div>
  )
}
