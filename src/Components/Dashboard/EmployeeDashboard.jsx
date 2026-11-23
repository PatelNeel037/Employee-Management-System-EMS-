import Header from './Employee/Header'
import TaskStatus from './Employee/TaskStatus'
import TaskCard from './Employee/TaskCard'

const EmployeeDashboard = ({ setUser, userData, setUserData }) => {

  return (
    <div className='bg-[#1C1C1C] h-screen w-full'>
      <Header setUser={setUser} userData={userData} />
      <TaskStatus userData={userData} />
      <TaskCard userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default EmployeeDashboard