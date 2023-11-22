import React from 'react'
import Input from './Input'
import Label from './Label'
import Buttom from './Buttom'
import Link from 'next/link'
import "./estilo.css"
function Form() {
  return (
    <div className='login'>
        <Label titulo="Correo electronico"/> 
        <Input tipo="email" holder="Ej. Hey@rodolforivera.com"/>
        <Label  titulo="Contraseña"/> 
        <Input tipo="password" holder="Escribe una contraseña"/>
        
        <div className='contenedor_boton'>
        
        <Link href="/logeado/inicio">
        <Buttom tipo="Iniciar sesion"/>
        </Link>
       
        <Link href="/logeado/cuenta">
        <Buttom tipo="Crear cuenta"/>
        </Link>
        </div>
        
    </div>
  )
}

export default Form