const employee = [
  
];

const admin = [
  {
    id: 1,
    name: "Holder",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employee))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem('employee'))
  const adminData = JSON.parse(localStorage.getItem('admin'))
  return { employeeData, adminData }
}