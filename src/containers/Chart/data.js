export const data = {
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
          23.93, 29.43, 39.23, 38.23, 40.23, 41.23, 44.34, 84.93, 34.43, 83.23,
          12.23, 81.23, 10.23, 123.34, 123.93, 83.43, 37.23, 72.23, 84.23, 93.23,
          183.34, 23.93, 38.43, 93.23, 93.23, 12.23, 99.23, 173.34, 35.93, 95.43
        ],
      },

      year:  {
        range: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ],
        values: [
          123.93, 83.43, 72.23, 84.23, 93.23, 183.34,
          38.43, 93.23, 93.23, 12.23, 99.23, 173.34,
        ],
      },

      threeyears: thousandDataPoints(),

      twelveyears: fiveThousandDataPoints(),
    };

function thousandDataPoints() {
  const hundredDataPoints = [
    23.93, 29.43, 39.23, 38.23, 40.23, 41.23, 44.34, 84.93, 34.43, 83.23,
    12.23, 81.23, 10.23, 123.34, 123.93, 83.43, 37.23, 72.23, 84.23, 93.23,
    183.34, 23.93, 38.43, 93.23, 93.23, 12.23, 99.23, 173.34, 35.93, 95.43,
    23.93, 29.43, 39.23, 38.23, 40.23, 41.23, 44.34, 84.93, 34.43, 83.23,
    12.23, 81.23, 10.23, 123.34, 123.93, 83.43, 37.23, 72.23, 84.23, 93.23,
    183.34, 23.93, 38.43, 93.23, 93.23, 12.23, 99.23, 173.34, 35.93, 95.43,
    23.93, 29.43, 39.23, 38.23, 40.23, 41.23, 44.34, 84.93, 34.43, 83.23,
    12.23, 81.23, 10.23, 123.34, 123.93, 83.43, 37.23, 72.23, 84.23, 93.23,
    183.34, 23.93, 38.43, 93.23, 93.23, 12.23, 99.23, 173.34, 35.93, 95.43,
    283.34, 53.93, 31.43, 99.23, 193.23, 212.23, 199.23, 100.34, 235.93, 195.43
  ];

  return {
    range: Array.from({length: 1000}, (v, k) => k+1),
    values: [
      ...hundredDataPoints, ...hundredDataPoints,
      ...hundredDataPoints, ...hundredDataPoints,
      ...hundredDataPoints, ...hundredDataPoints,
      ...hundredDataPoints, ...hundredDataPoints,
      ...hundredDataPoints, ...hundredDataPoints,
    ]
  }
}

function fiveThousandDataPoints() {
  const dataPoints = thousandDataPoints();

  return {
    range: Array.from({length: 5000}, (v, k) => k+1),
    values: [
      ...dataPoints.values,
      ...dataPoints.values,
      ...dataPoints.values,
      ...dataPoints.values,
      ...dataPoints.values
    ]
  }
}
