
import React from 'react';
import padStart from 'lodash/padStart';
import cloneDate from 'clone-date';

export default class TimePicker extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      date: props.value || props.defaultValue || new Date(),
    };
    [
      'handleHoursChange', 'handleMinutesChange', 'handleHoursKeyDown', 'handleMinutesKeyDown'
    ].forEach(meth => (this[meth] = this[meth].bind(this)));
  }
  handleHoursChange (ev) {
    let hours = parseInt((typeof ev === 'object') ? ev.target.value : ev, 10) || 0;
    if (hours < 0) hours = 0;
    else if (hours > 23) hours = 23;
    let d = cloneDate(this.state.date);
    d.setHours(hours);
    this.setState({ date: d });
    this.props.onChange(d);
  }
  handleMinutesChange (ev) {
    let minutes = parseInt((typeof ev === 'object') ? ev.target.value : ev, 10);
    if (minutes < 0) minutes = 0;
    else if (minutes > 59) minutes = 59;
    let d = cloneDate(this.state.date);
    d.setMinutes(minutes);
    this.setState({ date: d });
    this.props.onChange(d);
  }
  handleHoursKeyDown ({ key }) {
    if (key === 'ArrowUp') this.handleHoursChange(this.state.date.getHours() + 1);
    if (key === 'ArrowDown') this.handleHoursChange(this.state.date.getHours() - 1);
  }
  handleMinutesKeyDown ({ key }) {
    if (key === 'ArrowUp') this.handleMinutesChange(this.state.date.getMinutes() + 5);
    if (key === 'ArrowDown') this.handleMinutesChange(this.state.date.getMinutes() - 5);
  }
  render () {
    let { date } = this.state
      , { disabled = false } = this.props
    ;
    return (
      <div className="time-picker">
        <input type="text"
          value={padStart(date.getHours(), 2, '0')}
          onChange={this.handleHoursChange}
          onKeyDown={this.handleHoursKeyDown}
          disabled={disabled}
        />
        :
        <input type="text"
          value={padStart(date.getMinutes(), 2, '0')}
          onChange={this.handleMinutesChange}
          onKeyDown={this.handleMinutesKeyDown}
          disabled={disabled}
        />
      </div>
    );
  }
}
const { object, func, bool } = React.PropTypes;
TimePicker.propTypes = {
  value:        object,
  defaultValue: object,
  onChange:     func.isRequired,
  disabled:     bool,
};
