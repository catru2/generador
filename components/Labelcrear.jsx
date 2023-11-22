import React from 'react'
import "./estilo.css"

function Labelcrear(props) {
  return (
    <div className='sub_crear'>
        <label >
            {props.titulo}
        </label>
    </div>
  )
}

export default Labelcrear