import React from 'react';
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import { data } from './data.js';
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
