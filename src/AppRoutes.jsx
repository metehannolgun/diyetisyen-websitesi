import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Hakkımda from "./pages/Hakkımda"
import Tarifler from "./pages/Tarifler"
import TarifDetay from "./pages/TarifDetay"
import Danisanlar from "./pages/Danisanlar"
import Contact from "./pages/Contact"
import SSS from "./pages/SSS"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hakkımda' element={<Hakkımda />} />
        <Route path='/saglikli-tarifler' element={<Tarifler />} />
        <Route path='/tarif/:id' element={<TarifDetay />} />
        <Route path='/danisanlar' element={<Danisanlar />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sss' element={<SSS />} />
    </Routes>
  )
}

export default AppRoutes