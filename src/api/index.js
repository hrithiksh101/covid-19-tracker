import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

  let changeAbleUrl = url ;

  if ( country ){

    changeAbleUrl = `${url}/countries/${country}` ;
    console.log(country) ;

  }

  const response = await axios
    .get(changeAbleUrl)
    .then((resp) => {
      return {
        confirmed: resp.data.confirmed,
        recovered: resp.data.recovered,
        deaths: resp.data.deaths,
        lastUpdate: resp.data.lastUpdate,
      };
    })
    .catch((err) => {
      console.log(err);

      return {};
    });
 
    console.log('inside the fetch data' , response ) ;

  return response;
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    //const response = await axios.get(url);
    // console.log(response) ;
    const modifiedData = response.data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`);

    // countries.map( country => console.log(country.name) ) ;

    return countries.map((country) => country.name);
  } catch (error) {
    return {};
  }
};
