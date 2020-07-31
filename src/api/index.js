import axios from 'axios';

export const search =async (country)=>{
    console.log(country);
    const {data: {confirmed, recovered, deaths, lastUpdate}}= country==="" ? await axios.get(`https://covid19.mathdro.id/api/`) : await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
    console.log(confirmed);    
    const result={
        confirmed,
        recovered,
        deaths,
        lastUpdate,
    }
    return result;
}