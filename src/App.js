import React, { Component } from 'react';
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import {search} from './api/index';
import {countries} from './api/countries';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{

    state={
        country:"",
        data:{},
        countries:[],
    }
    
    handleCountryUpdate=async (country)=>{
        const newcountry= await country;
        this.setState({country:newcountry});
        const result= await search(this.state.country);
        this.setState({data:result});
    }

    componentDidMount=async()=>{
        const result=await search(this.state.country);
        this.setState({data:result});
        const country=await countries();
        this.setState({countries:country});
    }
            render(){return(
            <div className="container">
                <Cards data={this.state.data}/>
                <CountryPicker countries={this.state.countries} handleCountryUpdate={this.handleCountryUpdate}/>
                <Chart/>
            </div>
        )
    };
}
export default App;