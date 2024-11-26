import React, { createContext, useState,useEffect } from 'react'
import { getLoaclstorage } from '../utils/localStorage'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [userData,setUserData]=useState(null)

   useEffect(() => {
    const {employees,admin}=getLoaclstorage()
    console.log(employees)
    setUserData({employees,admin})
   }, [])
   
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider