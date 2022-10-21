

import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { DiaroRoutes } from '../Diario/router/DiaroRoutes';



export const Approuter = () => {
  return (
    
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes />}/>


        <Route path="/*" element={<DiaroRoutes />} />
    </Routes>
  )
}
