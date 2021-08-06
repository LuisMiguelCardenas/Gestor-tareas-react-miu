import React from 'react';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const TaskRow = ({item,toggleTask,removeItem}) => {


    return ( 
        <div>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
            <Grid item xs={1}>
            {item.done === false ? <input 
                    type="checkbox" 
                    checked={item.done} 
                    onChange={() => toggleTask(item)}/> : null}
            </Grid>    
            <Grid item xs={8}>
                <Grid container justifyContent="center">
                    {item.name}
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Button
                  title = "Eliminar"
                  onClick={()=>{removeItem(item.name)}}
                  >
                <DeleteIcon  color="secondary" />
                </Button>
            </Grid>
           
          
        </Grid>   
        </div>
     );
}
 
export default TaskRow;