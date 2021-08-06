import React from 'react';
import './App.css';
import TasksContainer from './components/TasksContainer'
import { Box, Container, Grid } from '@material-ui/core';



function App() {

  
  return (

    <div className="rutinas-seguimiento-page">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Rutinas de seguimiento</h1>
          </Grid>
          <Grid item xs={3}>
            <TasksContainer/>
          </Grid>
          <Grid item xs={9}>
            Calendario 
          </Grid>
        </Grid>
      </Container>
    </div>


  );
}

export default App;
