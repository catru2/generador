import React from 'react'
import ButtomHistorial from './Buttomhistorial'

function Formhistorial() {
  return (
    <div className='contendor_columnas'>
        <div className='columnas'>
                <p > <strong> Sitio</strong></p>
                <p> <strong> Usuario </strong></p>
                <p> <strong> Contraseña </strong></p>
         
        </div>
        <div className='columnas'>      
                <p > <strong>Facebook</strong></p>
                <p> <strong>Juan Perez</strong></p>
                <p> <strong>01Z@jskas</strong></p>   
        </div>  
        <div className='columnas'>
                <p > <strong>Telmex </strong></p>
                <p> <strong>@Juanp780</strong></p>
                <p> <strong>9dsuweam0 </strong></p>   
        </div>
        <div className='columnas'>
                <p > <strong>Instagram</strong></p>
                <p> <strong>Aura Lopez</strong></p>
                <p> <strong>8W@kmle</strong></p>   
        </div>    
        <div className='columnas'>
                <p > <strong>Instagram</strong></p>
                <p> <strong>Aura Lopez</strong></p>
                <p> <strong>8W@kmle</strong></p>   
        </div>
        <div className='columnas'>
                <p > <strong>Instagram</strong></p>
                <p> <strong>Aura Lopez</strong></p>
                <p> <strong>8W@kmle</strong></p>   
        </div>        
        <div className='contenedor_botonhistorial'>
              <ButtomHistorial tipo="Copiar"/>
              <ButtomHistorial tipo="Regresar"/>
        </div>
    </div>
  )
}

export default Formhistorial