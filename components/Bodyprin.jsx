import React from 'react'
import "./estilo.css"
import Image from 'next/image'
import Principal from "./../public/assets/Imagen_principal.png"
function Bodyprin() {
  return (
 
    <div>
    <div className='titulo_prin'> 
    <h1>Nuestra intencion es ser una herramienta util y eficaz para generar contraseñas aleatorias.  </h1>
    <Image src={Principal} className='imag_prin'/>
    </div>
    <div className='titulo_segp'>
        <h1>Para una mayor seguridad</h1>
        <p>Tus datos pueden estar mejor protejidos</p>
    </div>

    </div>
  )
}

export default Bodyprin