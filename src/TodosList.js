import React from 'react'
import TodoItem from './TodoItem'

export default function TodosList() {
    const items=[{item:'first item',checked:true},{item:'second item',checked:false},{item:'third item',checked:false}]
const todosStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'50px'
}
  return (
    <div style={todosStyle}>
      {
        items.map(el =>{
            return(
                <TodoItem name={el.item} checked={el.checked}/>
            )
        })
      }
    </div>
  )
}
