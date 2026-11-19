const employee = [
  {
    id: 1,
    name: "Rahul Patel",
    email: "e@e.com",
    password: "123",
    task: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage UI for the company website.",
        taskDate: "2026-11-15",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Identify and fix the login authentication issue.",
        taskDate: "2026-11-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Build a responsive navigation bar.",
        taskDate: "2026-11-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Complete the user API integration.",
        taskDate: "2026-11-12",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test website functionality and report bugs.",
        taskDate: "2026-11-18",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 8,
      newTask: 3,
      completed: 5,
      failed: 2
    }
  },

  {
    id: 2,
    name: "Aarav Shah",
    email: "employee2@gmail.com",
    password: "123",
    task: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop an admin dashboard layout.",
        taskDate: "2026-11-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure the project database.",
        taskDate: "2026-11-11",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "User Profile",
        taskDescription: "Create a user profile page.",
        taskDate: "2026-11-17",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate the payment gateway.",
        taskDate: "2026-11-12",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Responsive Design",
        taskDescription: "Make all pages mobile responsive.",
        taskDate: "2026-11-19",
        category: "Design"
      }
    ],
    taskNumbers: {
      active: 5,
      newTask: 7,
      completed: 4,
      failed: 1
    }
  },

  {
    id: 3,
    name: "Priya Desai",
    email: "employee3@gmail.com",
    password: "123",
    task: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project technical documentation.",
        taskDate: "2026-11-15",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Design and implement the website footer.",
        taskDate: "2026-11-10",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Validation",
        taskDescription: "Implement email validation functionality.",
        taskDate: "2026-11-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Search Feature",
        taskDescription: "Implement product search functionality.",
        taskDate: "2026-11-13",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Testing",
        taskDescription: "Test all UI components.",
        taskDate: "2026-11-20",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 9,
      newTask: 4,
      completed: 6,
      failed: 3
    }
  },

  {
    id: 4,
    name: "Rohan Mehta",
    email: "employee4@gmail.com",
    password: "123",
    task: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API",
        taskDescription: "Develop REST APIs for employee management.",
        taskDate: "2026-11-15",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Login Page",
        taskDescription: "Develop the login page UI.",
        taskDate: "2026-11-09",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement secure JWT authentication.",
        taskDate: "2026-11-17",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Deployment",
        taskDescription: "Deploy the application to the server.",
        taskDate: "2026-11-12",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test API endpoints and responses.",
        taskDate: "2026-11-19",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 6,
      newTask: 2,
      completed: 8,
      failed: 4
    }
  },

  {
    id: 5,
    name: "Neha Sharma",
    email: "employee5@gmail.com",
    password: "123",
    task: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Product Cards",
        taskDescription: "Design reusable product cards.",
        taskDate: "2026-11-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Image Optimization",
        taskDescription: "Optimize website images for faster loading.",
        taskDate: "2026-11-10",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Cart Functionality",
        taskDescription: "Implement add-to-cart functionality.",
        taskDate: "2026-11-17",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Order Management",
        taskDescription: "Develop order management functionality.",
        taskDate: "2026-11-12",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Final Testing",
        taskDescription: "Perform final application testing.",
        taskDate: "2026-11-20",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 4,
      newTask: 6,
      completed: 3,
      failed: 2
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