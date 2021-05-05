
import React from 'react';
import './App.css';
import Searchbox from './Searchbox';
import Weather from './weather';

class App extends React.Component{

  cityName;
  url;

  constructor(){
    super();
    this.state = {
      searchfield:'',
      place:'Enter Place name on Searchbox',
      temp:'showsTemperature',
      description:'showsDescription',
      popup:false
    }
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
    // console.log(this.state.searchfield);
  }

  addUrl = () => {
      this.state.searchfield.length === 0?(
      this.setState({popup:true})
      )
      :
      this.fetchUrl();
  }
  fetchUrl(){
    this.cityName = this.state.searchfield;
      console.log(this.cityName);
      this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=afd17ef4e034f170fab2aa26860b0df3`;
      console.log(this.url);
      this.getData();
      this.setState({popup:true})
  }

  getData(){
    console.log("fetching data")
    fetch(this.url)
  .then(resolve =>{
    return resolve.json()
  })
  .then(data2 =>{
    this.setState({temp:data2.main.temp});
    this.setState({place:data2.name});
    this.setState({description:data2.weather[0].description});
    // console.log(data2.main.temp);
    // console.log(data2.name);
    // console.log(data2.weather[0].description);
    // console.log(data2);

    
    })
    
  }

  closePopup = () => {
    this.setState({popup:false})
  }



  
  



  render(){
    
    return(

      <React.Fragment>
        {this.state.popup?<Weather closePopup={this.closePopup} name={this.state.place} temp={this.state.temp} description={this.state.description} />:''}
      <div className="tc" >
        <p>WeatherForecast</p>
        <div>
          <div><i className="fas fa-cloud-sun"></i></div>
          <Searchbox searchChange = {this.onSearchChange}/>
          <button onClick={this.addUrl}>Search</button>
        </div>
        
      </div>
      </React.Fragment>
      
    )
  }
 
    
  
}

export default App;
