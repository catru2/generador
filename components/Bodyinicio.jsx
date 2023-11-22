import React from 'react'
import Buttom from './Buttom'
import Link from 'next/link'
import "./estilo.css"

function Bodyinicio() {
  return (
    <div>
        <div className='titulo_inicio'>
        <h1>Nuestra intencion es ser una herramienta util y eficaz para la generacion de contraseñas </h1>
        </div>
        
        <div className='subti_inicio'>
        <p>A continuacion tenemos dos opciones: </p>
        </div>
       
        <div className='contbotons_inicio'>
        <Link href="/logeado/generador">
        <Buttom tipo="Generar una contraseña personalizada"/>
        </Link>  
      <Link href="/logeado/historial">
      <Buttom tipo="Historial"/>
      </Link>

      
      <Buttom tipo="Cerrar sesion"/>
     
       
       
        
        </div>
        
       
        
    </div>
  )
}

export default Bodyinicio