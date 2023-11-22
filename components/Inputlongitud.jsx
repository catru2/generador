import React from 'react'
import "./estilo.css"
function Inputlongitud(props) {
  return (
    <input  className='input_longitud' name={props.name} onChange={props.fun}/>
  )
}

export default Inputlongitud