import React from 'react'

function About() {
  return (
    <div className='container' style={{"borderStyle": "double"}}>
        <div>
      <h1>About Our Employee Management System</h1>
      <p>Our Employee Management System is a web application that allows you to manage your employee data with ease. You can add, edit, delete, and view employee information through this system. It's designed to be user-friendly, responsive, and accessible from any device.</p>
      <h2>Features</h2>
      <ul>
        1.CRUD functionality: You can create, read, update, and delete employee data through this system. This makes it easy to manage your employee information and keep it up-to-date.<br/>
        2.Three pages: Our system is divided into three main pages: the homepage, the employee list page, and the employee details page. This makes it easy to navigate and find the information you need.<br/>
        3.Responsive design: Our system is designed to work on all devices, including desktops, laptops, tablets, and smartphones. The interface adjusts to fit the screen size, making it easy to use and read on any device.<br/>
      </ul>
      <h2>How to use</h2>
      <p>Using our Employee Management System is easy! Here's a quick overview of the main features:</p>
      <ol>
        1.Homepage: The homepage provides an overview of the system and a navigation menu to access the other pages.<br/>
        2.Employee list page: This page displays a list of all employees in the system. You can add new employees, edit existing employees, or delete employees from this page.<br/>
        3.Employee details page: This page displays detailed information about a specific employee. You can edit or delete the employee from this page.<br/>
      </ol>
      <p>Our Employee Management System is a powerful tool for managing your employee data. It's easy to use, responsive, and comes with all the features you need to manage your employee information effectively. We hope you enjoy using our system and that it helps make your work easier!</p>
    </div>
    </div>
  )
}

export default About
