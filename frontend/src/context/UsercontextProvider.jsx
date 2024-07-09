import UserContext from "./UserContext";
import React, { useState } from 'react'

export default function UsercontextProvider({children}) {
    let [login,setLogin]=useState(false)
    let [count,setCount]=useState(0)
  return (
    <UserContext.Provider value={{login,setLogin,count,setCount}}>
      {children}
    </UserContext.Provider>
  )
}
