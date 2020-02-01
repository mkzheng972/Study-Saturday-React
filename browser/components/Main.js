import React from 'react'
import { Component } from 'react'
import Student from './Student'
import StudentList from './StudentList'
import axios from 'axios'   // need axios to get data from database

export default class Main extends Component {

  constructor() {

    super();

    this.state = {
      students : [],
      tests: [],
    };

    this.studentTest = this.studentTest.bind(this);

  }

  async componentDidMount () {    // this happens only once and after the initial render, you want your async/await, call axios and grab students to be loaded
    try {
      const response = await axios.get('/student');
      const studentsData = response.data;
      this.setState({students: studentsData});
      // console.log("got students", studentsData);
    } catch (error) {
        console.log("there was a problem accessing students");
    }
  }

  async studentTest () {
    try {
      const response = await axios.get('/test');
      const testData = response.data;
      this.setState({tests: testData});
      console.log("got this", testData)
    } catch (error) {
        console.log("there was a problem accessing tests")
    }
  }

  render() {
    return (
      <div>
        <h2>Students</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            {this.state.students.map( student => (
              <Student key={student.id} student={student}/>
            ))}
            <tr>
              <td>
                {this.state.tests}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
