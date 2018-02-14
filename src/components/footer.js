import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import classnames from 'classnames';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/globals'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {

  renderTodoCount() {
    const { completedCount } = this.props;
    const itemWord = completedCount === 1 ? 'item' : 'items'
    return (
      <span className="todo-count">
        <strong>{completedCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  renderButtonFilter(filter) {
    const title = FILTER_TITLES[filter]
    const { currentFilter, handleFilter } = this.props
    return (
      <a className={classnames({ selected: filter === currentFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => handleFilter(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, handleRemoveCompleted, todos } = this.props
    var rest = todos.length - completedCount
    if (rest > 0) {
      return (
        <button className="clear-completed"
                onClick={()=>handleRemoveCompleted()} >
          { 'Clear completed('+rest+')'  }
        </button>
      )
    }
  }

  render(){
      const { todos, currentFilter, handleFilter, handleRemoveCompleted, handleCompleteAll } = this.props;

      return (
        <div className="footer">
            <div >
              <span className="todo-count" >{this.renderTodoCount()}</span>
              <ul className="filters">
                {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                  <li key={filter}>
                    {this.renderButtonFilter(filter)}
                  </li>
                )}
              </ul>
              {this.renderClearButton()}
            </div>
        </div>
      );
    }
};

export default Footer;
