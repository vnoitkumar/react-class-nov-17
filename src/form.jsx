import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  handelChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    alert(`My Name is ${this.state.name}`);
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handelSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={this.handelChange}
        />

        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form;
