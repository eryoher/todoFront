import React, { Component } from 'react';

class Header extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    const { value: text } = e.target;

    this.setState({
      text,
    });
  };

  onKeyDown = e => {
    const { value } = e.target;

    if (e.which === 13) {
      this.props.onSubmit(value);
      this.setState({
        text: '',
      });
    }
  };

  render() {
    return (
      <input
        placeholder="What do you need to do?"
        value={this.state.text}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        className="new-todo"        
      />
    );
  }
}

const styles = {
  textField: {
    width: '100%',
    fontSize: 20,
  },
};

export default Header;
