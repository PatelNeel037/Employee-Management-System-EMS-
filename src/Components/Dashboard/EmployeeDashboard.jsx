import Header from './Employee/Header'
import TaskStatus from './Employee/TaskStatus'
import TaskCard from './Employee/TaskCard'

const EmployeeDashboard = ({ setUser, userData, setUserData }) => {

  return (
    <div className='bg-[#0F131D] h-screen w-full'>
      <Header setUser={setUser} userData={userData} />
      <TaskStatus userData={userData} />
      <TaskCard userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default EmployeeDashboard