const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design Homepage",
          taskDescription: "Create a responsive design for the homepage.",
          taskDate: "2024-11-25",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Fix Login Bug",
          taskDescription: "Resolve the login issue for mobile users.",
          taskDate: "2024-11-24",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        }
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Database Optimization",
          taskDescription: "Optimize queries for faster response times.",
          taskDate: "2024-11-23",
          category: "Maintenance",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        }
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Write Unit Tests",
          taskDescription: "Cover all functions in the API module.",
          taskDate: "2024-11-20",
          category: "Testing",
          active: false,
          newTask: true,
          completed: false,
          failed: true,
        },
        {
          taskTitle: "Prepare Documentation",
          taskDescription: "Update the API documentation for developers.",
          taskDate: "2024-11-19",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        }
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Deploy Backend",
          taskDescription: "Deploy the backend server to the production environment.",
          taskDate: "2024-11-21",
          category: "Deployment",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review pull requests for the new feature.",
          taskDate: "2024-11-20",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Run Performance Tests",
          taskDescription: "Check the system's response under heavy load.",
          taskDate: "2024-11-18",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Update Security Policies",
          taskDescription: "Apply the latest security patches to the system.",
          taskDate: "2024-11-17",
          category: "Security",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        }
      ],
    }
  ];
  
  
    
    const  admin=[ {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ]




    export const setLoaclstorage=()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
    }
    export const getLoaclstorage=()=>{
      const employees= JSON.parse( localStorage.getItem('employees'))
      const admin= JSON.parse( localStorage.getItem('admin'))
      console.log(admin)

      return{employees,admin}

    }
      