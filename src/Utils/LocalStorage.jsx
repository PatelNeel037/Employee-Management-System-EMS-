const employee = [
  {
    id: 1,
    name: "Rahul Patel",
    email: "e@e.com",
    password: "123",
    task: [],
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  },

  {
    id: 2,
    name: "Aarav Shah",
    email: "employee2@gmail.com",
    password: "123",
    task: [],
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  },

  {
    id: 3,
    name: "Priya Desai",
    email: "employee3@gmail.com",
    password: "123",
    task: [],
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  },

  {
    id: 4,
    name: "Rohan Mehta",
    email: "employee4@gmail.com",
    password: "123",
    task: [],
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  },

  {
    id: 5,
    name: "Neha Sharma",
    email: "employee5@gmail.com",
    password: "123",
    task: [],
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0
    }
  }
];

const admin = [
  {
    id: 1,
    name: "Amit Patel",
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