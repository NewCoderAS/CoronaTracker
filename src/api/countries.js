import axios from 'axios';

export const countries=async ()=>
{
    const countrynames= await axios.get("https://covid19.mathdro.id/api/countries");
    const country=countrynames.data.countries.map(x=>x.name)
    return country;

}