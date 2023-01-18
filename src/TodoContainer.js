import React from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import Navbar from './Navbar'
import TodosList from './TodosList'

export default function TodoContainer() {
    const bigDiv={            
        display:'flex',
        flexDirection:'row'     
     }
     const otherDiv={     
        width:'100vw',
        height:'100vh',
        // backgroundColor:'lightblue',
     }
     
  return (
    <div style={bigDiv}>
            <Navbar/>
    <div style={otherDiv}>
    <Header/>
    <InputTodo />
    <TodosList/>
    </div>
    </div>
  )
}
