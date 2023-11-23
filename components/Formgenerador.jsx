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
import axios from 'axios'
import { useRouter } from 'next/navigation'
function Formgenerador() {
  const [ready, setReady] = useState ("")
  const [password, setPassword] = useState({
      usuario:"",
      sitio:"",
      mayuscula:false,
      minuscula:false,
      numeros:false,
      especiales:false,
      longitud:0
  })
  const handleChange = (e) =>{
      if(!e.target.checked){
      setPassword({
        ...password,
        [e.target.name]:e.target.value
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
  const hadleSubmit = async(e) =>{
    e.preventDefault()
    const res = await axios.post("http://localhost:3001/generar-contrasena",password, {withCredentials: true} )
    setReady(res.data.contraseña)
    if(res.data.mensaje){
      
      alert("se creo exitosamente")
      navigation.replace("/logeado/login")
    
  }
}
  return (
    <div className='generar'>
         <form onSubmit={hadleSubmit}>
         <div className='labelinpu_generador'>
         <Labelcrear titulo="Usuario" /> 
         <Input name="usuario" fun={handleChange}/>
         <Labelcrear  titulo="Sitio"/> 
         <Input name="sitio" fun={handleChange}/>
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
         <Inputcrear caja="checkbox" fun={handleChange} name="especiales"/>
         <Labelcheck titulo="Caracteres especiales"/>
         </div>
       
        <div className='contenedor_boton'>
        
        <Buttom tipo="Generar contraseña" type="submit"/>
        
        <Buttom tipo="Regresar" type="button"/>
       </div>
         </form>

        <div className='contendor_contragene'>
        <Labelgenerada titulo="Contraseña Generada"/>
        
        <p>{ready}</p>  
        
        </div>
        </div>
       
        
    
  )
}

export default Formgenerador