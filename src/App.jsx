import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Solicitacao from './components/solicitacao/Solicitacao.jsx'
import Login from './components/login/Login.jsx'
import Reembolso from './components/reembolsos/Reembolsos.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
        <Route path="/reembolsos" element={<Reembolso />} />
      </Routes>

  )
}

export default App
