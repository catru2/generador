import React from 'react'
import "./estilo.css"

function Buttom(props) {
  return (

         <button className='boton' type={props.type}>{props.tipo} </button>
  
  )
}

export default Buttom