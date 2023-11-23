import React from 'react'
import "./estilo.css"
function Inputgenerada(props) {
  return (
    <input className='input_generada' value={props.val}/>
  )
}

export default Inputgenerada