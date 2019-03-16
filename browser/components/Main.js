import React, { Component } from 'react';
import axios from 'axios';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    const { data: students } = await axios.get('/student');
    console.log('STUDENTS:', students);
    this.setState({ students });
  }

  render() {
    const studentsList =
      this.state.students && this.state.students.length > 0
        ? this.state.students
        : [];

    console.log('studentsList', studentsList);

    return (
      <div>
        <table>
          <tbody>
            {studentsList.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
