import { createContext, useState  } from "react";
import React from 'react'
import UserContext from "./UserContext";

export default function ContextProvider({children}) {
    const[user,setUser]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  )
}
