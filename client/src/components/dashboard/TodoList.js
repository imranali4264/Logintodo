import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTodo } from "../../actions/profileActions";

class TodoList extends Component {
  onDeleteClick(id) {
    this.props.deleteTodo(id);
  }
  render() {
    const todolist = this.props.todolist.map(list => (
      <tr key={list._id}>
        <td>{list.todo}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, list._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <br />
        <h4 className="mb-4 text-center">TodoList</h4>
        <table className="table">
          <tbody style={{ textAlign: "center" }}>{todolist}</tbody>
        </table>
      </div>
    );
  }
}
TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTodo }
)(TodoList);
