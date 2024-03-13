import { useState } from 'react';
import './Friends.css'
export default function Country({country, handleVisitedCountries}){
    console.log(country);
    console.log(handleVisitedCountries)
    const [visited, setVisited] = useState(false);
    
     const handleVisit = ()=>{
        setVisited(!visited);
     }
    return(
      
        <div className='box'>
       
        <h3>Name: {country.name?.common}</h3>
        <h4>Capital: {country.capital}</h4>
        <img src={country.flags.png}></img>
        
        <div className='div'>
        <button onClick={handleVisit}>{visited ? "visited" : "Going"}</button>
         {visited && 'you visited'}{visited || "want to go"}
        <button>See More</button>        
        </div>
         <button onClick={()=>handleVisitedCountries(country)}>ADD to Visited</button>
        </div>
       
    )
}