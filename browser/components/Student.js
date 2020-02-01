import React from 'react'

const Student = (props) => {

  return (

    <tr>
      <td>{props.student.fullName}</td>
    </tr>
  )
}

export default Student;
