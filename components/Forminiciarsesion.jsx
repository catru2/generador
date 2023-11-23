"use client"
import React from 'react'
import Input from './Input'
import Label from './Label'
import Buttom from './Buttom'
import Link from 'next/link'
import "./estilo.css"
import { useState } from "react";
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
function Forminiciarsesion() {
  const [login , setLogin] = useState({
    usuario:"",
    contraseña:"",
 })
 const navigation=useRouter()
 
 const handleChangecorreo = (e) =>{
  setLogin({
    ...login,
   usuario : e.target.value
  })
}

const handleChangecontrasena = (e) =>{
  setLogin({
    ...login,
    contraseña : e.target.value
  })
}

const handleSubmit = async (e) =>{
  e.preventDefault()
if(!login.contraseña  || !login.usuario){
Swal.fire({
  title: 'Error!',
  text: 'No llena los campos necesarios',
  icon: 'error',
  confirmButtonText: 'Cool'
})
}else{
  try {
    axios.defaults.withCredentials=true;
  const res = await axios.post("http://localhost:3001/login",login)
  if(res.data.mensaje){
    Swal.fire({
      title: 'Success',
      text: 'Accedio exitosamente',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    navigation.replace("/logeado/inicio")
  }
  } catch (error) {
    console.log(error)
  }
}
}
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
      <Label titulo="Usuario"/> 
        <Input tipo="user" holder="Ej.leoncito" fun={handleChangecorreo}/>
        <Label  titulo="Contraseña"/> 
        <Input tipo="password" holder="Escribe una contraseña" fun={handleChangecontrasena}/>
        
        <div className='contenedor_boton'>
        
        
        <Buttom tipo="Iniciar sesion" type="submit"/>
        
     
    
       <Link  href="/logeado/cuenta"><Buttom tipo="Crear cuenta" type="button"/></Link>
        </div>
      </form>
        
        
    </div>
  )
}
export default Forminiciarsesion