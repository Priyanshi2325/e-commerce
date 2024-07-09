import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AsminPannel from './components/AsminPannel.jsx'
import AddProduct from './components/AddProduct.jsx'
import ClientApp from './ClientApp.jsx'
// import Home from './client/Home.jsx'
import ViewData from './components/ViewData.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'
import Cart from './client/Cart.jsx'
// import Home from './client/home.jsx'
import Homes from './client/Homes.jsx'
import AdminLogin from './components/Adminlogin.jsx'
import Protected from  './components/Protected.jsx'
import ClientLogin from './client/ClientLogin.jsx'
import ClientRegister from './client/clientRegister.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
{/* {client home card} */}
      <Route path='/' element={<ClientApp />}>
        <Route path='' element={<Homes/>} />
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/clientLogin' element={<ClientLogin/>}/>
        <Route path='/clientSingup' element={<ClientRegister/>}/>
      </Route>

      {/* components*/}
      
      <Route path="/admin" element={<App />}>
        <Route path='' element={
          <Protected>
          <AsminPannel />
          </Protected>
        }/>
      </Route>
      <Route path='/admin/addProduct' element={
        <Protected>
        <AddProduct />
        </Protected>
      } />
      <Route path='/admin/viewData/:id' element={<ViewData />} />
      <Route path='admin/updateData/:id' element={<UpdateProduct />} />
      <Route path='/adminLogin' element={<AdminLogin/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
