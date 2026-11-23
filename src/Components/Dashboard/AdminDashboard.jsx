import Header from './Employee/Header'
import AdminTaskCreater from './Admin/AdminTaskCreater'
import AllTask from './Admin/AllTask'
import { useState } from 'react'

const AdminDashboard = ({ setUser, userData }) => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem('employee')))
  return (
    <div className='bg-[#0b0b0b] h-screen w-full'>
      <Header setUser={setUser} userData={userData} />
      <AdminTaskCreater data={data} setData={setData}/>
      <AllTask data={data} />
    </div>
  )
}

export default AdminDashboard