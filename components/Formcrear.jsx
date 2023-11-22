import React from 'react'
import Inputcuenta from './Inputcuenta'
import Labelcrear from './Labelcrear'
import Buttom from './Buttom'
import Link from 'next/link'
import "./estilo.css"
function Formcrear() {
  return (
    <div className='crearcuen'>
    <Labelcrear titulo="Correo electronico"/> 
    <Inputcuenta tipo="email" holder="Ej. Hey@rodolforivera.com"/>
    <Labelcrear  titulo="Contraseña"/> 
    <Inputcuenta tipo="password" holder="Escribe una contraseña"/>
    
    <Labelcrear  titulo="Repetir contraseña"/> 
    <Inputcuenta tipo="password" holder="Repite la contraseña"/>

    <div className='contenedor_botoncrear'>
    <Link href="/logeado/login">
    <Buttom tipo="Registrarme"/>
    </Link>
    
    </div>
    
</div>
  )
}

export default Formcrear