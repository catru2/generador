import React from 'react'

function Inputcuenta(props) {
  return (
    <input type={props.tipo} placeholder={props.holder} onChange={props.fun} className='input_crear_cuenta' />
  )
}

export default Inputcuenta