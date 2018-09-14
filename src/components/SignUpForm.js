import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { addUser } from "../actions/usersActions";
import { connect } from "react-redux";
import InputCommon from "./common/InputCommon";
import SelectListCommon from "./common/SelectListCommon";
import PropTypes from "prop-types";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        profession: "",
        country: "",
        username: "",
        password: "",
        password2: ""
      }
    };

    this.onSubmit = this.onDataSubmit.bind(this);
    this.onChange = this.onDataChange.bind(this);
  }

  onDataSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state.user, this.props.history);
  };

  onDataChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const optionsProf = [
      { label: "Select profession", value: 0 },
      { label: "Programmer", value: "Programmer" },
      { label: "Accountant", value: "Accountant" },
      { label: "Teacher", value: "Teacher" },
      { label: "Builder", value: "Builder" }
    ];

    const optionsCountry = [
      { label: "Select Country", value: 0 },
      { label: "Greece", value: "Greece" },
      { label: "USA", value: "USA" },
      { label: "Canada", value: "Canada" },
      { label: "Austria", value: "Austria" },
      { label: "Australia", value: "Australia" }
    ];

    const errors = this.props.errors;

    return (
      <div className="container">
        <form className="well form-horizontal" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>
              <center>
                <h2>
                  <b>Registration Form</b>{" "}
                </h2>
              </center>
            </legend>
            <br />
            <InputCommon
              name="first_name"
              placeholder="First Name"
              label="First Name"
              type="text"
              onChange={this.onChange}
              errors={errors.first_name}
            />
            <InputCommon
              name="last_name"
              placeholder="Last Name"
              label="Last Name"
              type="text"
              onChange={this.onChange}
              errors={errors.last_name}
            />
            <InputCommon
              name="email"
              placeholder="Email"
              label="Email"
              type="email"
              onChange={this.onChange}
              errors={errors.email}
            />
            <InputCommon
              name="password"
              placeholder="Paaword"
              label="Password"
              type="password"
              onChange={this.onChange}
              errors={errors.password}
            />
            <InputCommon
              name="password2"
              placeholder="Confirm password"
              label="Password Confirmation"
              type="password"
              onChange={this.onChange}
              errors={errors.password2}
            />

            <InputCommon
              name="username"
              placeholder="Username"
              label="Username"
              type="text"
              onChange={this.onChange}
              errors={errors.username}
            />
            <SelectListCommon
              name="country"
              placeholder="Country"
              label="Country"
              onChange={this.onChange}
              errors={errors.country}
              options={optionsCountry}
            />
            <SelectListCommon
              name="profession"
              placeholder="Select your profession"
              label="Profession"
              onChange={this.onChange}
              options={optionsProf}
              errors={errors.profession}
            />
            <div className="form-group">
              <label className="col-md-4 control-label" />
              <div className="col-md-4">
                <br />
                <button type="submit" className="pull-right btn btn-warning">
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  addUser: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
  mapStateToProps,
  { addUser }
)(withRouter(SignUpForm));
