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
      <div>
        <hr/>
        <h2>Ans to the questions</h2>
        <hr/>
        <h4>Q1: How react works</h4>
        <p>Building web apps with real DOM is slower. Here react comes to rescue. React gives us a virtual DOM. We use re React compares the virtual DOM with the actual dom using diff algorithm. This helps to update the browser DOM most efficiently. Thats how react works and speeds up the whole process.</p>
        <hr/>
        <h4>Q2: Props vs state</h4>
        <p>Props are used to pass data from one component to another, state is used to pass data within the component. Props are immutable while state is mutable or changable. So, we can say props are read only but state supports both read and write. Child component can access props but can't access state. Stateless component can have props but they can't have state.Props can be changed by parent component but state can't.</p>
      </div>
    </div>
  );
}

export default App;
