import React from 'react'

function Inputcuenta(props) {
  return (
    <input type={props.tipo} placeholder={props.holder} className='input_cuentacrea' />
  )
}

export default Inputcuenta