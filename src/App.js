import React from 'react';
import Term from './components/Term'
import Category from './components/Category'
import Location from './components/Location'
import SortBy from './components/SortBy'
import OpenAt from './components/OpenAt'
import axios from 'axios';


import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



class App extends React.Component {


  state = {
    option: 1,
  }

  getTab = () => {
    switch(this.state.option){
      case 1:
        return <Term />;
      case 2:
        return  <Category />;
      case 3:
        return  <Location />;
        case 4:
        return <SortBy />;
        case 5:
        return <OpenAt />;
      default:
        return null;
    }
  }


  render() {
    return (
      <div className="App">


          <button onClick={() => { this.setState({option: 1})} }>Term</button>
          <button onClick={() => { this.setState({option: 2})} }>Category</button>
          <button onClick={() => { this.setState({option: 3})} }>Location</button>
          <button onClick={() => { this.setState({option: 4})} }>Sort BY</button>
          <button onClick={() => { this.setState({option: 5})} }>Open At  </button>
          {this.getTab()}
        
       
          <form  noValidate autoComplete="off">
        

        

        

        

        
       
       

       

       
       
       
       

        <TextField
          id="outlined-search"
          label="Search term"
          type="search"
          
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          id="outlined-search"
          label="category"
          type="search"
          
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="location"
          type="search"
          
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Ssortby"
          type="search"
          
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="open at"
          type="search"
          
          margin="normal"
          variant="outlined"
        />

       
      </form>
        
        
      </div>
    );
  }
}

export default App;
