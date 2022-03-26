import logo from './logo.svg';
import './App.css';

import { Grid, Typography } from "@mui/material"
import Watches from './components/Watches/Watches';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div>
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
      <Grid container spacing={2} m={2} p={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Watches></Watches>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cart></Cart>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
