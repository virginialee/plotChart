import React from 'react';
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import { data } from './data.js';
import { de } from '../../locale/plotly-locale-de';
import { es } from '../../locale/plotly-locale-es';
import { fr } from '../../locale/plotly-locale-fr';
import { it } from '../../locale/plotly-locale-it';

import DateRangeSelector from '../../components/DateRangeSelector/DateRangeSelector';

// https://plot.ly/javascript/bar-charts/
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
      threeyears: '1000 data points',
      twelveyears: '5000 data points',
    }
    return data[range];
  }

  dataRange(range, orientation='v') {
    let xAxis = 'range';
    let yAxis = 'values';

    if (orientation === 'h') {
      xAxis = 'values';
      yAxis = 'range';
    }

    console.log(data[range]);

    return {
      x: data[range][xAxis],
      y: data[range][yAxis],
      width: 0.5,
      orientation,
      marker: {
        color: 'rgba(50, 171, 96, 0.8)',
      },
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

  dimension(range) {
    let title = 'A simple graph';
    if (range) {
      title = this.title(range);
    }

    return {
      autosize: true,
      title: title,
      xaxis: {
        // ticks: 'inside',
        // tickprefix: '€',
        // ticksuffix: '#',
        tickangle: -45,
      },
      yaxis: {
        // gridwidth: 1,
        // title: 'Earnings in Euro',
        tickprefix: '€',
        ticksuffix: '#',
      },
      margin: {
        r: 10,
        b: 100,
        pad: 10,
      },
      plot_bgcolor: 'rgba(245, 246, 249, 1)',
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
            data={[this.barChart(this.dataRange(this.state.selected))]}
            layout={this.dimension(this.state.selected)}
            useResizeHandler={true}
            config={config}
            style={{width: "80%", height: "80%"}}
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
