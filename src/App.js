// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
class App extends Component {
  render(){
 return (
    
  <MuiThemeProvider>
        
        <div className="App">
           <Navbar />
           <Search />
        </div>
        
   </MuiThemeProvider>
   
  )
  }
 
}

export default App;
