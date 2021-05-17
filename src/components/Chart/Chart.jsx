import React, { useState , useEffect} from 'react';
import { fetchDailyData } from './../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


function Chart() {
  const [dailyData, setDailyData] = useState([]);
  
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  },[]);

  const lineChart = () => {

    console.log(dailyData);
    return dailyData.length > 0 ? 
    ( <Line data={{ 
        labels: dailyData.map(({ date }) => date) , 
        datasets: [{data: dailyData.map(({ confirmed }) => confirmed), label: 'Infected', borderColor: '#3333ff', fill: true }]
        }} 
      />
    ) : 'Loading...';
  }

  return (
    <div>
      <h2>Chart</h2>
      <div>{ lineChart() }</div>
    </div>
  )
}

export default Chart
