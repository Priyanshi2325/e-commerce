import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import UsercontextProvider from './context/UsercontextProvider'

export default function App() {
  return (
    <UsercontextProvider>
      <Navbar/>
      <Outlet/>
    </UsercontextProvider>
  )
}
