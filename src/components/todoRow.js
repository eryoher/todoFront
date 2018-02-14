import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import TodoTextInput from './todoTextInput';

class TodoRow extends Component {
  constructor(props) {
    super(props);
    this.state={editing: false};
  }

  handleEdit(){
    this.setState({ editing: true });
  }

  handleEditCancel(){
    this.setState({ editing: false });
  }

  handleSave = (id, text) => {
    this.setState({ editing: false })
    this.props.handleEditTodo(id, text);
  }

  render() {
    const styles = {
      completed: {
        color: 'gray',
        textDecoration: 'line-through',
      },
    };
    const { todo, handleRemoveTodo, handleCompleteTodo, handleEditTodo } = this.props;
    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.name}
             editing={this.state.editing}
             onSave={(text) => this.handleSave(todo.id, text)}
             onCancel={()=>this.handleEditCancel()} />
      )
      } else {
        element = (
          <div className="view">
            <input className="toggle"
                   type="checkbox"
                   checked={todo.checked}
                   onChange={handleCompleteTodo(todo.id, todo.checked)} />
            <label onDoubleClick={()=>this.handleEdit()} style={todo.checked ? styles.completed : {}}>
              {todo.name}
            </label>
            <button className="destroy"
                    onClick={handleRemoveTodo(todo.id)} />
          </div>
        )
    }
    return (
      <li className={classnames({
        completed: todo.checked,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}

export default TodoRow;
