import React from 'react';

export const SingleStudent = props => {
  const averageGrade = Math.round(
    props.student.tests.reduce((acc, val) => {
      return acc + val.grade;
    }, 0) / props.student.tests.length
  );
  console.log('averageGrade:', averageGrade);
  return (
    <div>
      <h3>{props.student.fullName}</h3>
      Average Grade: {averageGrade}%
      <div style={{paddingTop: '5px'}}>
        <table>
          <tbody>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
            {props.student.tests.map(test => {
              return (
                <tr key={test.id}>
                  <td>{test.subject}</td>
                  <td>{test.grade}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleStudent;
