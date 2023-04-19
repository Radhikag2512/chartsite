import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react"


function BarChart() {
 // Define a state variable to hold the fetched data
  const [data, setData] = useState([]);


  // Fetch the data from the JSON file when the component mounts
const getData = () => {
  fetch('data.json').then((response) => {
    return response.json();
  }).then((myjson) => {
// console.log(data);
setData(myjson);
  })
}

  useEffect(() => {
    getData()
  },[])


  // Define the chart options using the fetched data
const options = {
  xAxis: {
    type: "category",
    data: data.map((item) => { // use the Alcohol property as X axis data
      return item.Alcohol
    }),
    name: 'Alcohol',
  },
  yAxis: {
    type: "value",
    name: 'Magnesium',
  },
  series: [
    {
      data: data.map((item) => {// use the Magnesium property as Y axis data
        return item.Magnesium
      }),
      type: "bar",
      smooth: true
    }
  ],
  tooltip: {
    trigger: "axis"
  }
}


// Render the chart using the ReactEcharts component
  return (
    <ReactEcharts
      option={options}
      style={{ width: "600px", height: "300px" }}
    ></ReactEcharts>
  )
}

export default BarChart;