import React from 'react'
import "./estilo.css"
function Labelgenerada(props) {
  return (
    <div className='sub_generada'>
        <label >
            {props.titulo}
        </label>
    </div>
  )
}

export default Labelgenerada