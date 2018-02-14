import React, { Component } from 'react';
import { List } from 'material-ui/List';

import TodoRow from './todoRow';
import Footer from '../components/footer';

class TodoList extends Component {
  constructor(props){
      super(props);
      this.state = {
        currentFilter: 'show_all',
      };
  }

  handleCompleteTodo = (id, checked) => {
    return () => this.props.actions.completeTodo(id, checked);
  };

  handleEditTodo = (id, text) => {
    this.props.actions.editTodo(id, text);
  };

  handleRemoveTodo = id => {
    return () => this.props.actions.removeTodo(id);
  };

  handleFilter = filter => {
    this.setState({
      currentFilter: filter,
    });
  };

  handleRemoveCompleted = () => {
    this.props.actions.removeCompleted();
  };

  handleCompleteAll = () => {
    this.props.actions.completeAll();
  };

  renderList(todos){
    var rows = []
    const { currentFilter } = this.state
    const completedCount = todos.reduce((count, { checked }) => checked ? count : count + 1, 0);
    const filteredTodos = todos.filter(({ checked }) => {
      switch (currentFilter) {
        case 'show_completed':
          return checked;
        case 'show_active':
          return !checked;
        default:
          return true;
      }
    });

    return (
      <div>
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoRow
              key={todo.id}
              todo={todo}
              handleCompleteTodo={this.handleCompleteTodo}
              handleRemoveTodo={this.handleRemoveTodo}
              handleEditTodo={this.handleEditTodo}
            />
          )}
        </ul>
        <Footer
          todos={todos}
          handleFilter={this.handleFilter}
          currentFilter={this.state.currentFilter}
          handleRemoveCompleted={this.handleRemoveCompleted}
          completedCount={completedCount}
        />
      </div>
    );


  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        {(todos != undefined) ? this.renderList( todos ) : null }
      </div>
    );
  }
}

export default TodoList;
