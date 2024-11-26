import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLoaclstorage, setLoaclstorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user,setUser]=useState(null)
  const authdata=useContext(AuthContext)
  // console.log(authdata)
const handleLogin =(email,password)=>{
  console.log(authdata)
  if(email =="admin@me.com" && password=="123"){
    setUser('admin')
    console.log("this is Admin")
  }else if(email =="user@me.com" && password=="123"){
    console.log("this is user")
    setUser("employee")

  }
  else{
    alert("Invalid credentails")
  }
}

  
  return (
    <>
    {!user? <Login handleLogin={handleLogin}/>:""}
    {user == 'admin' ? <AdminDashboard/>:<EmployeeDashboard/>}
    </>
  )
}

export default App