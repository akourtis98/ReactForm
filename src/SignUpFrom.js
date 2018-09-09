import React, { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <form
          className="well form-horizontal"
          action=" "
          method="post"
          id="contact_form"
        >
          <fieldset>
            <legend>
              <center>
                <h2>
                  <b>Registration Form</b>
                </h2>
              </center>
            </legend>
            <br />

            <div className="form-group">
              <label className="col-md-4 control-label">First Name</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    name="first_name"
                    placeholder="First Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Last Name</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    name="last_name"
                    placeholder="Last Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Profession</label>
              <div className="col-md-4 selectContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-list" />
                  </span>
                  <select
                    name="department"
                    className="form-control selectpicker"
                  >
                    <option value="">Select your profession</option>
                    <option>Engineering</option>
                    <option>Agriculture</option>
                    <option>Accounting</option>
                    <option>Software development</option>
                    <option>Mayor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Country</label>
              <div className="col-md-4 selectContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-list" />
                  </span>
                  <select
                    name="department"
                    className="form-control selectpicker"
                  >
                    <option value="">Select your Country</option>
                    <option>Greece</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Username</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    name="user_name"
                    placeholder="Username"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Password</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    name="user_password"
                    placeholder="Password"
                    className="form-control"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Confirm Password</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="form-control"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">E-Mail</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-envelope" />
                  </span>
                  <input
                    name="email"
                    placeholder="E-Mail Address"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" />
              <div className="col-md-4">
                <br />
                <button type="submit" className="pull-right btn btn-warning">
                  <span className="col-md-2 glyphicon glyphicon-send" />
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

export default SignUpForm;
