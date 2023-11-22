import React from 'react'
import "./estilo.css"
function Labelcheck(props) {
  return (
    <div className='sub_check'>
        <label >
            {props.titulo}
        </label>
    </div>
  )
}

export default Labelcheck