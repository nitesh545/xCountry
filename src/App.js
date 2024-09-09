import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid2 } from '@mui/material';

export default function App() {
  let [flags, setFlags] = useState([]);

  useEffect(() => {

    // fetch("https://xcountries-backend.azurewebsites.net/all")
    //   .then((res) => res.json())
    //   .then((data) => setFlags(data))
    //   .catch((error) => console.log("Error fetching data: ", error))
    try {
      fetch("https://xcountries-backend.azurewebsites.net/all")
        .then((res) => res.json())
        .then((data) => setFlags(data));
    }
    catch (error) { console.log("Error fetching data:", error) }
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Grid2 container spacing={2}>
        {
          flags.map((flag) => {
            return (
              <Grid2 key={crypto.randomUUID()} size={2} sx={{ mt: 1, p: 1 }}>
                <img src={flag.flag} alt={flag.abbr}></img>
                <h4>{flag.name}</h4>
              </Grid2>
            );
          })
        }
      </Grid2>
    </div>
  );
}

