import React, { useEffect, useState } from 'react';
import '../src/App.css';
import Countries from './Countries';
function App() {
  const styleHere = {
    width: "1300px",
    height: "500px",
    color: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   
  };
      
  


  return (
    
    <div style={styleHere}>
    
    <Countries></Countries>
      
      
    </div>
  );
}



export default App;
