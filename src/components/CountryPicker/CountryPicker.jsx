import React from 'react';

    const CountryPicker = (countries) =>{
    if(!countries.countries[0])
    {
        return('Loading..');
    }
    else{
    return(
        <div className="form-group col-md-12 mt-3">
        <label htmlFor="inputState"><h4>Choose Country</h4></label>
        <select id="inputState" className="form-control" onChange={(e)=>countries.handleCountryUpdate(e.target.value)}>
          <option value="">Global</option>
          {countries.countries.map((country, i)=><option key={i} value={country}>{country}</option>)}
        </select>
      </div>
    );
    }
}

export default CountryPicker;