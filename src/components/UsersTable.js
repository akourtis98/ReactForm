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
    const { users } = this.props.users;

    let table;

    if (users) {
      table = (
        <div className="container">
          <table className="table">
            <thead className="grey lighten-2">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            {users.map(user => (
              <tbody key={user.id}>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.firstname}</td>
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
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(withRouter(UsersTable));
