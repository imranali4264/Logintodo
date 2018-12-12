import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      errors: {}
    };
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="add-todo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateTodo.prototypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(CreateTodo));
