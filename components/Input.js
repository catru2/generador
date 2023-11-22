import React from 'react'
import "./estilo.css"

function Input(props) {
  return (
      <input type={props.tipo} placeholder={props.holder} className='input_container' onChange={props.fun}/>
  
  )
}

export default Input