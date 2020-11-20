import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ram'
    };
  }

  handelClick = () => {
    this.setState({
      name: 'Sam'
    });
  };

  render() {
    return (
      <div>
        <label>Name:</label>

        {this.state.name === 'Ram' && <span>{this.state.name}</span>}
        {this.state.name === 'Sam' && <strong>{this.state.name}</strong>}

        <button onClick={this.handelClick}>Change Name</button>
      </div>
    );
  }
}

export default UserInfo;
