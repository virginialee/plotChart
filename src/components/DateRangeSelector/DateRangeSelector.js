import React from 'react';
import ReactDOM from 'react-dom';

class DateRangeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: 'week' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selected: event.target.value });
    this.props.onChange(event);
  }

  render() {
    return (
      <label>Date range:
        <select name='dateRangeSelector' onChange={this.handleChange}>
          <option value="week" selected={this.state.selected === 'week'}>7 days</option>
          <option value="month" selected={this.state.selected === 'month'}>1 month</option>
          <option value="year" selected={this.state.selected === 'year'}>1 year</option>
        </select>
      </label>
    );
  }
};

export default DateRangeSelector;
