import React from 'react'
import imag from './images/supp.png'
export default function Suppbtn() {
    const suppStyle={
        borderRadius:'30px',
        border:'none',
        backgroundColor:'#EBEDEF',
        cursor:'pointer',
        marginLeft:'auto',
    }
    const imgStyle={
        width: '15px',
	    height: '15px',
    }
  return (
    <button style={suppStyle}><img style={imgStyle} src={imag} alt=''/></button>
  )
}
