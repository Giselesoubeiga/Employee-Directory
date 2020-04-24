/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";


class EmployeesList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {

      
    };
    
  }

  render() {

    return (
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr  onClick ={this.props.orderByName}>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
            </tr>
          </thead>

          <tbody>
            {this.props.employeesList.map((user) => (
              <tr key={user.email}>
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

                <td>{user.dob.age} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeesList;
