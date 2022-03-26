import './App.css';

import { Grid, Typography } from "@mui/material"
import Watches from './components/Watches/Watches';


function App() {
  return (
    <div className='bodyContainer'>
      <header>
      <Typography
        style={{ fontWeight: 400 }}
        align="center"
        m={2}
        variant="h2"
        component="h2"
        color="secondary">
        Get a watch
      </Typography>
      <Typography
        align="center"
        variant="h4"
        component="h4">
        Choose upto 4
      </Typography>
      </header>
      <Watches></Watches>
    </div>
  );
}

export default App;
