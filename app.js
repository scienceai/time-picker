
import React from 'react';
import ReactDOM from 'react-dom';

import TimePicker from '..';

class TimeDemo extends React.Component {
  constructor () {
    super();
    this.state = {
      value: new Date('1977-03-15T01:05:42.000'),
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (value) {
    this.setState({ value });
  }
  render () {
    let { value } = this.state;
    return (
      <div>
        <TimePicker
          value={value}
          onChange={this.handleChange}
        />
        <code>{value.toISOString()}</code>
      </div>
    );
  }
}

ReactDOM.render(
  <TimeDemo/>,
  document.getElementById('app')
);
