import React, { Component } from 'react'
import Card from './components/Cards/Card';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;
