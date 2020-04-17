/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";

class EmployeesList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          employees: response.data.results,
        });
      });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">phone</th>
              <th scope="col">email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.map((user) => (
              <tr>
                <th scope="row">
                  <img src={user.picture.medium} />{" "}
                </th>

                <td>
                  {user.name.title +
                    " " +
                    user.name.first +
                    " " +
                    user.name.last}{" "}
                </td>
                <td>{user.phone}</td>

                <td>{user.email}</td>

                <td>{user.dob.date} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeesList;
