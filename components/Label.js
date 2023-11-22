import React from 'react'
import "./estilo.css"


function Label(props) {
  return (
    <div className='sub'>
       <label> {props.titulo} </label>
    </div>
  
  )
}

export default Label