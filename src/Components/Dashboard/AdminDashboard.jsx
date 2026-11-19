import React from 'react'
import Header from './Employee/Header'
import AdminTaskCreater from './Admin/AdminTaskCreater'
import AllTask from './Admin/AllTask'

const AdminDashboard = ({setUser, userData}) => {
  return (
    <div className='bg-[#0b0b0b] h-screen w-full'>
        <Header setUser = {setUser} userData = {userData}/>
        <AdminTaskCreater />
        <AllTask />
    </div>
  )
}

export default AdminDashboard