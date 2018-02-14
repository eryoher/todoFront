import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import * as todoActions from '../actions/index';
import Paper from 'material-ui/Paper';
import Header from '../components/header';
import TodoList from '../components/todoLists';

class TodoApp extends Component{

  componentWillMount(){
    this.props.actions.fetchDataTodoLists();
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.todos != undefined && !nextProps.todos.hasOwnProperty('lists') ){
      this.props.actions.fetchDataTodoLists();
    }
  }

  render(){
    var todos = this.props.todos;
    var actions = this.props.actions;
    var completedTodoCount = 0;
    var countTodos = 0;
    if (todos != undefined && todos.hasOwnProperty('lists') ) {
      completedTodoCount = todos.lists.reduce((count, { checked }) => checked ? count : count + 1, 0);
      countTodos = todos.lists.length;
    }
    return(
      <MuiThemeProvider>
        <div className="todoapp">
          <h1>todos</h1>
          <Header actions={actions} countTodo={countTodos} completedTodoCount = {completedTodoCount} />
            { (todos != undefined) ?
              <TodoList
                todos={todos.lists}
                actions={actions}
              />
              :null
            }
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state){
  return {
    todos:state.data.data
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(todoActions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);
