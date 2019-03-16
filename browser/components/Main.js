import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import SinleStudent, { SingleStudent } from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent = (student) =>  {
    return this.setState({
      selectedStudent: student,
    });
  }

  render() {
    console.log('STUDENTS: ', this.state.students);
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            setStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
