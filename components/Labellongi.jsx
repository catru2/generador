import React from 'react'
import "./estilo.css"
function Labellongi(props) {
  return (
    <div className='sub_longi'>
    <label>
        {props.titulo}
    </label>
</div>
  )
}

export default Labellongi