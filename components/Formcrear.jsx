"use client"
import React from 'react'
import Inputcuenta from './Inputcuenta'
import Labelcrear from './Labelcrear'
import Buttom from './Buttom'
import "./estilo.css"
import { useState } from "react";
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
function Formcrear() {
   const [crearusuario , setUsuario] = useState({
    usuario:"",
    correo:"",
    contraseña:"",
 })
  const navigation=useRouter()

  const handleChangeusuario = (e) =>{
    setUsuario({
      ...crearusuario,
      usuario : e.target.value
    })
  }
  const handleChangecorreo = (e) =>{
    setUsuario({
      ...crearusuario,
     correo : e.target.value
    })
  }
  const handleChangecontrasena = (e) =>{
    setUsuario({
      ...crearusuario,
      contraseña : e.target.value
    })
  }
    const handleSubmit = async (e) =>{
      e.preventDefault()
      if(!crearusuario.usuario || !crearusuario.correo ||!crearusuario.contraseña){
        Swal.fire({
          title: 'Error!',
          text: 'No llena los campos necesarios',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }else{ 
        const res = await axios.post("http://localhost:3001/register",crearusuario )
        console.log(res)
      if(res.data.mensaje){
        Swal.fire({
          title: 'Success',
          text: 'se registro exitosamente',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigation.replace("/logeado/login")
      }else{
        (res.data.error)
        Swal.fire({
          title: 'Error',
          text: 'datos incorrectos',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      }

    }
    return (
      <div className='crearcuen'>
        
        <form onSubmit={handleSubmit}>
   
        <Labelcrear  titulo="Usuario"/> 
      <Inputcuenta tipo="user" holder="leoncito12" fun={handleChangeusuario}/>    
      <Labelcrear titulo="Correo electronico"/> 
      <Inputcuenta tipo="email" holder="Ej. Hey@rodolforivera.com"  fun={handleChangecorreo} />
      <Labelcrear  titulo="Contraseña"/> 
      <Inputcuenta tipo="password" holder="Escribe una contraseña" fun={handleChangecontrasena}/>
  
      <div className='contenedor_botoncrear'>
      <Buttom tipo="Registrarme"/>
      </div>
        </form>
      
      
  </div>
    )
  }
 


export default Formcrear