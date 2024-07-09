import React from 'react'
import ClientNavbar from './client/clientnavbar'
import { Outlet } from 'react-router-dom'
import UsercontextProvider from './context/UsercontextProvider2'

export default function ClientApp() {
    return(
        <UsercontextProvider>
            <ClientNavbar/>
            <Outlet/>
        </UsercontextProvider>
    )
}
