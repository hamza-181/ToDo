import React from 'react'

export default function Plusbtn() {
    const plusStyle={
        borderRadius:'30px',
        border:'none',
        backgroundColor:'#33B2FF',
        cursor:'pointer',
        color:'white',
        width:'25px',
        height:'25px',
        position:'absolute',
        top:'8px',
        right:'8px',
    }
  return (
      <button style={plusStyle} onClick=''>+</button>
  )
}
