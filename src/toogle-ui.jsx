import React from 'react';

class ToogleUi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  handleChange = (event) => {
    this.setState({
      isChecked: event.target.checked
    });
  };

  render() {
    return (
      <div>
        <input
          type='checkbox'
          defaultChecked={this.state.isChecked}
          onChange={this.handleChange}
        />

        {this.state.isChecked && <Label />}
      </div>
    );
  }
}

class Label extends React.Component {
  componentDidMount() {
    console.log('Component Mounted');

    document.title = 'Label Component Mounted';
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    console.log('Component UnMounted');

    document.title = 'React App';
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default ToogleUi;
