import React from 'react';

export const StudentList = props => {
  return (
    <tbody>
      {props.students.map(student => {
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td onClick={() => props.setStudent(student)}>Details</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default StudentList;
