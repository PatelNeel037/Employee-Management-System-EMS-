import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'
import { useEffect } from 'react'


export const authContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState('')
  useEffect(() => {
    // setLocalStorage()
    const {employeeData, adminData} = getLocalStorage()
    setUserData({employeeData, adminData})
  },[])
  
  return (
    <div>
      <authContext.Provider value={userData}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthProvider