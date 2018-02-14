import React, { Component } from 'react'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit = e => {
    const val = e.target.value.trim()
    if (val) {
      this.props.onSave(val);
      this.setState({text: val});
    }
  };

  handleKeyDown = event => {
			if (event.which === 27) {
				this.props.onCancel()
			} else if (event.which === 13) {
				this.handleSubmit(event);
			}
	};

  handleChange = e => {
    this.setState({ text: e.target.value })
  };

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  };

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown} />

    )
  }
}
