import React from 'react';
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import { de } from '../../locale/plotly-locale-de';
import { es } from '../../locale/plotly-locale-es';
import { fr } from '../../locale/plotly-locale-fr';
import { it } from '../../locale/plotly-locale-it';

import DateRangeSelector from '../../components/DateRangeSelector/DateRangeSelector';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: 'week' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selected: event.target.value });
  }

  title(range) {
    const data = {
      week: 'Weekly earnings',
      month: 'Monthly earnings',
      year: 'Yearly earnings',
    }
    return data[range];
  }

  dataRange(range, orientation='v') {
    let xAxis = 'range';
    let yAxis = 'values';

    const data = {
      week: {
        range: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
        values: [ 23.93, 29.43, 39.23, 38.23, 40.23, 41.23, 44.34 ],
      },

      month: {
        range: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        ],
        values: [
          23.93, 29.43, 39.23, 38.23, 40.23, 41.23, 44.34,
          84.93, 34.43, 83.23, 12.23, 81.23, 10.23, 123.34,
          123.93, 83.43, 37.23, 72.23, 84.23, 93.23, 183.34,
          23.93, 38.43, 93.23, 93.23, 12.23, 99.23, 173.34,
          35.93, 95.43
        ],
      },

      year:  {
        range: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        values: [
          123.93, 83.43, 72.23, 84.23, 93.23, 183.34,
          38.43, 93.23, 93.23, 12.23, 99.23, 173.34,
        ],
      },
    };

    if (orientation === 'h') {
      xAxis = 'values';
      yAxis = 'range';
    }

    return {
      x: data[range][xAxis],
      y: data[range][yAxis],
      orientation,
    }
  }

  barChart(data) {
    return Object.assign({ type: 'bar' }, data);
  }

  pieChart(data) {
    return Object.assign({ type: 'pie' }, data);
  }

  pieChartData() {
    return {
      values: [ 123, 39, 83, 73 ],
      labels: [ 'vanilla', 'strawberry', 'chocolate', 'mint' ],
    }
  }

  data() {
    return {
      x: [ 1, 2, 3 ],
      y: [ 2, 5, 3 ],
      orientation: "h",
    };
  }

  dimension(range) {
    let title = 'A simple graph';
    if (range) {
      title = this.title(range);
    }

    return {
      // width: '40%',
      // height: 400,
      autosize: true,
      title: title,
      xaxis: {
        ticks: 'inside',
        tickprefix: '€',
        ticksuffix: '#',
        tickangle: -45,
      },
      yaxis: {
        gridwidth: 1,
      },
      margin: {
        pad: 20,
      }
    };
  }

  render() {
    console.log(this.dataRange(this.state.selected));
    const config = {
      locale: 'es',
      locales: { es }
    };

    return (
      <div>
        <DateRangeSelector onChange={this.handleChange}/>
        <div>
          <Plot
            data={[this.barChart(this.dataRange(this.state.selected, 'h'))]}
            layout={this.dimension(this.state.selected)}
            useResizeHandler={true}
            config={config}
          />
          <Plot
            data={[this.pieChart(this.pieChartData())]}
            layout={this.dimension()}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Chart/>, document.getElementById("graph-root"));

// const wrapper = document.getElementById("graph-root");
// const plotlyEventHandler = (event) => (
//   console.log(event)
// );
//
// wrapper.on('plotly_event', plotlyEventHandler);
// wrapper ? ReactDOM.render(<Chart />, wrapper) : false;
