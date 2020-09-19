import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from '../src/Images/image.png' ;


class App extends React.Component {

  state = {
     data : {} ,
     country : ''
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

 //   console.log( fetchData , 'inside the component did mount' ) ;

   this.setState( { data : fetchedData } ) ;     

  }


  handleCountryChange = async (country) => {

      const fetchedData = await fetchData( country ) ;
         
      console.log('inside the fetched data' , fetchedData ) ;

      this.setState({ data : fetchedData , country : country })

      // console.log(country) ;

  }

  render() {


     const { data , country } = this.state.data ? this.state.data : {} ;

    return (
      <div className={styles.container}>

        <img className = {styles.images}  src = {coronaImage} />

        <Cards  data = {this.state.data} />
        <CountryPicker  handleCountryChange = {this.handleCountryChange} />
        <Charts data = {this.state.data} country = {this.state.country} className = { styles.container } />
      </div>
    );
  }
}

export default App;
