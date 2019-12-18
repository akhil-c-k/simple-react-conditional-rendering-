import React from 'react';
import logo from './logo.svg';
import './App.css';
import Seasondisplay from './SeasonDisplay.js'
class App extends React.Component {
  constructor(props)
   {
     super(props);
     this.state = {
       lat:null,
       errorMessage:''
     }
   }

   componentDidMount()
    {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat:position.coords.latitude}),
        err => this.setState({errorMessage:err.message}) 
      );
    }
  render()
  {
    const { errorMessage,lat} = this.state
    if(this.state.errorMessage && !this.state.lat)
     {
       return ( <div>Error : {errorMessage} </div> );
     }
    else
      {
        return ( <Seasondisplay lat={this.state.lat}/>);
      }
   
  }

  
}



export default App;
