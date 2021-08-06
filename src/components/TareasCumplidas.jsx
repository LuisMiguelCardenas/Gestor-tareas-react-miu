import React from 'react';
import Grid from '@material-ui/core/Grid';


const TareasPendientes = ({taskTableRows}) => {

    
    return ( 
  
        <div className="Cumplidas">
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <h4>Cumplidas</h4>
            </Grid>
            <Grid item xs={12} >
              {taskTableRows}
            </Grid>
            
        </Grid>
        </div>
    
     );
}
 
export default TareasPendientes;