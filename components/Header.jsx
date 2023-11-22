import React from 'react'
import "./estilo.css"
import Link from "next/link"
import Buttom from './Buttom'
function Header() {
  return (
    <div className='titulo'>
     <h1>Genepass</h1>
          <Link href="/logeado/login">
        <div className='botonpa'>
      <Buttom tipo="Iniciar sesion" />
      </div>
     </Link>
    </div>
  )
}
export default Header