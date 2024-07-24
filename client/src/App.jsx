import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Login />} />
    </Routes>
  </Router>

}

export default App
