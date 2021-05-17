import React, { useState , useEffect} from 'react';
import { fetchDailyData } from './../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


function Chart() {
  const [dailyData, setDailyData] = useState({});
  
  useEffect(() => {
    const fetchApi = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchApi();
  });

  // const lineChart = ();

  return (
    <div>
      <h2>Chart</h2>
    </div>
  )
}

export default Chart
