import React from 'react';
import ReactDOM from "react-dom";

import { Bar } from 'react-chartjs-2';
const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: { title: "Legend", viewWindow: { min: 0, max: 15 } }
};
const data= {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: 'bar',
    data: [10,20,30]
  },
  {
    label: 'line',
    data: [90,80,70]
  }
]
}
export default class ReactChart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Bar
          data={data}
          width={50}
          height={200}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}