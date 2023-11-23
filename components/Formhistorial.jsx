"use client"
import React from 'react'
import ButtomHistorial from './Buttomhistorial'
import { useEffect,useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
function Formhistorial() {
        const [passwords,setPasswords] = useState([])

        const upload = async () =>{
                const res = await axios.get("http://localhost:3001/obtener",{withCredentials:true})
                setPasswords(res.data)
                console.log(res.data)
        }
        useEffect(() => {
                upload()
        },[])
  return (
    <div className='contendor_columnas'>
        <div className='columnas'>
                <p > <strong> Sitio</strong></p>
                <p> <strong> Usuario </strong></p>
                <p> <strong> Contraseña </strong></p>
        </div>
        {passwords.map((password,index)=>(
                <tr key={index} className='columnas'>
                        <td>
                                {password.sitio}
                        </td>
                        <td>
                                {password.usuario}
                        </td>
                        <td>
                                {password.password}
                        </td>
                </tr>
        ))}

        <div className='contenedor_botonhistorial'>
               <Link href="/logeado/inicio">
               <ButtomHistorial tipo="Regresar"/>
               </Link>
              
        </div>
    </div>
  )
}

export default Formhistorial