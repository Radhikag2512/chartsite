import React from 'react';
import LineChart from './LineChart';
import BarChart from "./BarChart"

const App = () => {
  return (
    <div className='App'>
      <h1> Line Chart</h1>
      <LineChart />
      <h1> Bar Chart</h1>
      < BarChart/>
    </div>
  );
};

export default App;