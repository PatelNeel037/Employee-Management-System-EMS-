import React, { useEffect, useEffectEvent, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { authContext } from './Context/AuthProvider'
import { getLocalStorage } from './Utils/LocalStorage'

const App = () => {

  const authData = useContext(authContext)
  const employeeData = JSON.parse(localStorage.getItem('employee'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('role')))
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')))
  const handelLogin = (email, password) => {

    if (authData.adminData.find((u) => (u.email == email && u.password == password))) {
      const data = authData.adminData.find((u) => (u.email == email))
      setUserData(data)
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('role', '1')
      setUser(localStorage.getItem('role'))
    }
    else if (employeeData.find((u) => (u.email == email && u.password == password))) {
      const data = employeeData.find((u) => (u.email == email))
      setUserData(data)
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('role', '2')
      setUser(localStorage.getItem('role'))
    }
    else {
      alert('Not valid')
    }
  }
  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : (user == '1' ? <AdminDashboard setUser={setUser} userData={userData} /> : <EmployeeDashboard setUser={setUser} userData={userData} setUserData={setUserData} />)}
      
    </>
  )
}

export default App