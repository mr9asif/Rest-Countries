import { useEffect, useState } from "react"
import Country from "./Country";
import './Friends.css'


export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries =country =>{
        console.log('Add to go ');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
   return(
        
        <div className="box3">
        <h1>Countries:{countries.length} </h1>
            <div>
            <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                  {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                  }
                </ul>            
            </div>

         <div className="box2">
         {
            countries.map(country => <Country
                key={country.cca3}
                handleVisitedCountries={handleVisitedCountries}
                country={country}></Country>)
           }         
         </div>
      </div>
        
   )
  
}
