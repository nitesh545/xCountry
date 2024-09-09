import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid2 } from '@mui/material';

function App() {
  const [flags, setFlags] = useState([]);
  const fetchFlags = async () => {
    try {
      let res = await axios.get("https://xcountries-backend.azurewebsites.net/all");
      setFlags(res.data);
      console.log(res.data);
    }
    catch (err) { console.log(`Error fetching data: ${err}`); }
  }
  useEffect(() => { fetchFlags(); }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Grid2 container spacing={2}>
        {
          flags.map((flag) => {
            return (
              <Grid2 key={crypto.randomUUID()} size={2} sx={{ mt: 1, p: 1 }}>
                <img src={flag.flag} alt={flag.name}></img>
                <h4>{flag.name}</h4>
              </Grid2>
            );
          })
        }
      </Grid2>
    </div>
  );
}

export default App;
