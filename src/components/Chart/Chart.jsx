import React, { useState , useEffect} from 'react';
import { fetchDailyData } from './../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


function Chart({ data: { confirmed ,deaths ,recovered }, country}) {
  const [dailyData, setDailyData] = useState([]);
  
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  },[]);

  const lineChart = () => {
    return dailyData.length > 0 ? 
    ( <Line data={{ 
        labels: dailyData.map(({ date }) => date) , 
        datasets: [
          {data: dailyData.map(({ confirmed }) => confirmed), label: 'Infected', borderColor: '#3333ff', fill: true },
          {data: dailyData.map(({ recovered }) => recovered), label: 'Recover', borderColor: 'green', fill: true },
          {data: dailyData.map(({ deaths }) => deaths), label: 'Deaths', borderColor: 'rgba(255,0,0,0.5)', fill: true }
      ],
        
        }} 
      />
    ) : 'Loading...';
  }

  const barChart = () => {
    return confirmed ? 
    <Bar 
      data={
        {
          labels: ['Infected', 'Recovered' , 'Deaths'],
          datasets: [
            { 
              label: 'People' , backgroundColor: ['rgba(0, 0, 255, 0.5)' , 'rgba(0, 255, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            data: [confirmed.value, recovered.value, deaths.value]
            }
          ]
        }
      } 
      options={
        {
          legent: { 
            display: false ,
            title: {display: true , text: `Current country ${country}`}
          }
        }
      }
    /> : 'Loading ...'
  }

  return (
    <>
      <div className={styles.chartContainer}>
        { country ? barChart() : lineChart() }</div>
    </>
  )
}

export default Chart
