import React, { Component } from 'react';
import TodoTextField from './textField';

class Header extends Component {
  render() {
    const {completedTodoCount, countTodo} = this.props;
    const { addTodo , completeAllTodos} = this.props.actions;
    const update= (completedTodoCount === 0 ) ? 0 : 1;
    return (
      <div>
        <TodoTextField onSubmit={text => addTodo(text)} />
        <input
					className="toggle-all"
					type="checkbox"
					onChange={()=>completeAllTodos(update)}
					checked={completedTodoCount === 0}
				/>
      </div>
    );
  }
}

export default Header;
