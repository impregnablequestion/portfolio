import React from 'react'

const BellJarText = () => {
  return (
    <div>
      <p>
        <b>Bell Jar Rota</b> is a MVC web application made using Python with
        the Flask framework and a PostgreSQL database.
      </p>
      <p>
        It was made to be used in my hospitality job as a tool to organise
        the staff shifts, and allows the user to add remove, and edit employees
        and assign them to different shifts over the course of the week
      </p>
      <p>
        Employees can specify their maximum and minimum hours, and the user interface
        will update to show the manager whether they have allotted each employee a
        satisfactory amount of hours
      </p>
      <p>
        Shifts can be added, removed, and updated in the "Create Rota" view. This project
        taught me a lot about writing SQL queries,
      </p>
    </div>
  )
}

export default BellJarText;