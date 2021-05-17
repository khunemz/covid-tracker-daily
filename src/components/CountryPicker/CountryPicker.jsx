import React, { useState ,useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'
import { getCountries } from './../../api'
function CountryPicker({handleCountryChange}) {

  const [countries,setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getCountries()
      setCountries(res);
    }
    fetchCountries();
  },[]);
  return (
    <>
      <div>
        <FormControl>
          <NativeSelect className={styles.formControl} defaultValue="" onChange={ (e) => handleCountryChange(e.target.value)} >
            <option value="global">Global</option>
            { countries.map((country) => <option key={country.name} value={country.name}>{country.name}</option>) }
          </NativeSelect>
        </FormControl>
      </div>
    </>
  )
}

export default CountryPicker
