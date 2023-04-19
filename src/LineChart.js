import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';


const LineChart = () => {
  // Define a state variable to hold the fetched data
 const [data, setData] = useState([]);


  // Fetch the data from the JSON file when the component mounts
    const getData = ( ) => {
        fetch('data.json').then((response) =>{
        return response.json()
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
        type: 'category',
        data: data.map((item) => { // use the Flavanoids property as X axis data
            return item.Flavanoids
        }),
        name: 'Flavanoids',
      },
      yAxis: {
        type: 'value',
        name: 'Ash',
      },
      series: [
        {
          data: data.map((item) => { // use the Ash property as Y axis data
            return item.Ash
          }),
          type: 'line',
        },
      ],
    };

   // Render the chart using the ReactEcharts component
    return <ReactEcharts option={options}  />;
  };
  
  export default LineChart;