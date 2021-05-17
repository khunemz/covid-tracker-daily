import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {  
  try{
    const response = await axios.get(url);
    return response;
  }catch(error) {
    console.log(error);
  }
}


export const fetchDailyData = async () => {  
  try{
    const {data} = await axios.get(`${url}/daily`);
    return data;
  }catch(error) {
    console.log(error);
  }
}

