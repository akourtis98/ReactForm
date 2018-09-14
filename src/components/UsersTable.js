import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getUsers } from "../actions/usersActions.js";

import Spinner from "./common/Spinner";

class UsersTable extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { users, loading } = this.props.users;

    let table;

    if (!loading) {
      table = (
        <div className="container">
          <table className="table">
            <thead className="grey lighten-2">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Country</th>
                <th scope="col">Profession</th>
              </tr>
            </thead>
            {users.map(user => (
              <tbody key={user._id}>
                <tr>
                  <td scope="row">{user.first_name}</td>
                  <td scope="row">{user.last_name}</td>
                  <td scope="row">{user.email}</td>
                  <td scope="row">{user.username}</td>
                  <td scope="row">{user.country}</td>
                  <td scope="row">{user.profession}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      );
    } else {
      table = <Spinner />;
    }

    return <div>{table}</div>;
  }
}

UsersTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  loading: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(withRouter(UsersTable));
