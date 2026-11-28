import Header from './Employee/Header'
import AdminTaskCreater from './Admin/AdminTaskCreater'
import AllTask from './Admin/AllTask'
import { useState } from 'react'

const AdminDashboard = ({ setUser, userData }) => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem('employee')))
  return (
    <div className='bg-[#0F131D] h-screen w-full'>
      <Header setUser={setUser} userData={userData} />
      <div className='flex justify-around gap-3 px-5'>
        <AdminTaskCreater data={data} setData={setData}/>
      <AllTask data={data} />
      </div>
    </div>
  )
}

export default AdminDashboard