import { Component } from "react";
import style from "./Employee.scss";

class Employee extends Component {
  state = {
    employees: [],
  };

  componentDidMount = () => {
    fetch(
      "https://niravkpatel28.github.io/json-data-server/employees/employees.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data });
      })
      .catch((err) => {
        return err;
      });
  };

  render() {
    return (
      <div>
        {this.state.employees.map((employee) => {
          return (
            <h1 style={style["h1"]} key={employee.id}>
              Welcome, {employee.firstname}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default Employee;
