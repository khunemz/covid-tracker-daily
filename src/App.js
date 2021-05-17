import React, { Component } from 'react'
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css'
import {fetchData} from './api'

class App extends Component {

  // ctor invoked inside {...}
  state = {
    data: {},
    country: ''
  }
  
  async componentDidMount() {
    const { data } = await fetchData();
    this.setState({data: data})
  }

  onCountryChange = async (country) => {
    if(country && country !== 'global') {
      const { data }  = await fetchData(country);
      this.setState({ data: data, country: country})
    } else {
      const { data } = await fetchData();
      this.setState({data: data})
    }
   
  }
  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <br />
        <Chart data={data}  country={country} />
        <CountryPicker data={data} handleCountryChange={(e) => this.onCountryChange(e)} />
      </div>
    )
  }
}

export default App;
