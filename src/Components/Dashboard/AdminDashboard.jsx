import React, { useEffect } from 'react'
import Header from './Employee/Header'
import AdminTaskCreater from './Admin/AdminTaskCreater'
import AllTask from './Admin/AllTask'
import { useContext } from 'react'
import { authContext } from '../../Context/AuthProvider'
import { useState } from 'react'

const AdminDashboard = ({ setUser, userData }) => {
  // const authData = useContext(authContext)
  const [userTask, setUserTask] = useState([])
  useEffect(() => {
    setUserTask(JSON.parse(localStorage.getItem('employee')))
  }, [])
  return (
    <div className='bg-[#0b0b0b] h-screen w-full'>
      <Header setUser={setUser} userData={userData} />
      <AdminTaskCreater />
      <AllTask data={userTask}/>
    </div>
  )
}

export default AdminDashboard