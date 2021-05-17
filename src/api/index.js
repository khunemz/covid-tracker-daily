import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {  
  try{
    let _url = '';
    if(country && country !== 'global') {
      _url = `${url}/countries/${country}`
    } else {
      _url = url;
    }
    const response = await axios.get(_url);
    return response;
  }catch(error) {
    console.log(error);
  }
}


export const fetchDailyData = async () => {  
  try{
    const {data} = await axios.get(`${url}/daily`);
    const modifiedData = data.map( (dailyData ) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.totalRecovered,
      date: dailyData.reportDate
    }))
    return modifiedData;
  }catch(error) {
    console.log(error);
  }
}


export const getCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    return response.data.countries;
  } catch(err) { console.log(err);}
}