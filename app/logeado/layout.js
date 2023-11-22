import React from 'react'
import CabezaLayout from '@/components/HeaderLogeado'

function HeaderLogeado({children}) {
  return (
    <>
    <CabezaLayout/>
    {children}
    </>

  )
}

export default HeaderLogeado