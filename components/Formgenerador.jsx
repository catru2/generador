"use client"
import React, { use } from 'react'
import Input from './Input'
import Labelcrear from './Labelcrear'
import Buttom from './Buttom'
import Buttomgenerada from './Buttomgenerada'
import Inputcrear from './Inputcrear'
import Labelcheck from './Labelcheck'
import Labellongi from './Labellongi'
import Inputlongitud from './Inputlongitud'
import Labelgenerada from './Labelgenerada'
import Inputgenerada from './Inputgenerada'
import "./estilo.css"
import { useState } from 'react'
function Formgenerador() {
  const [password, setPassword] = useState({
      mayuscula:false,
      minuscula:false,
      numeros:false,
      caracteres:false,
      longitud:0
  })
  const handleChange = (e) =>{
      if(!e.target.checked){
      setPassword({
        ...password,
        longitud:e.target.value
      })
      }else{
        setPassword(
          {
            ...password,
            [e.target.name] : e.target.checked,
          }
        )
      }
      
  }
  const hadleSubmit = (e) =>{
    e.preventDefault()
    console.log(password)
  }
  return (
    <div className='generar'>
         <form onSubmit={hadleSubmit}>
         <div className='labelinpu_generador'>
         <Labelcrear titulo="Usuario" /> 
         <Input/>
         <Labelcrear  titulo="Sitio"/> 
         <Input/>
         <div className='contador_contra'>
          <Labellongi titulo="Longitud de la contraseña"/>
          <Inputlongitud fun={handleChange} name="longitud" />  
         </div>
         </div>
         
         <div className='cajas_gene'>
         <Inputcrear caja="checkbox" fun={handleChange} name="mayuscula" />
         <Labelcheck titulo="Mayúsculas" />
         <Inputcrear caja="checkbox" fun={handleChange} name="minuscula" />
         <Labelcheck titulo="Minúsculas" />
         <Inputcrear caja="checkbox" fun={handleChange} name="numeros"/>
         <Labelcheck titulo="Números" />
         <Inputcrear caja="checkbox" fun={handleChange} name="caracteres"/>
         <Labelcheck titulo="Caracteres especiales"/>
         </div>
       
        <div className='contenedor_boton'>
        
        <Buttom tipo="Generar contraseña" type="submit"/>
        
        <Buttom tipo="Regresar"/>
       </div>
         </form>

        <div className='contendor_contragene'>
        <Labelgenerada titulo="Contraseña Generada" />
        <Inputgenerada />  
        <Buttomgenerada tipo="Copiar" />
        <Buttomgenerada tipo="Guardar"/>
        </div>
        </div>
       
        
    
  )
}

export default Formgenerador