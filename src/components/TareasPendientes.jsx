import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import {Modal,Button} from '@material-ui/core'

import TaskCreator from './TaskCreator'


import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider} from '@material-ui/pickers';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      border: 0,
      height: 48,
      padding: '0',
      "&:hover": {
        border: 0,
        backgroundColor: 'transparent'
    }
    },
    label: {
      textTransform: 'capitalize',
    },
  });

const TareasPendientes = ({taskTableRows , createTask}) => {

    const classes = useStyles();

    const [modal, setModal] = useState(false);

    const openCloseModal = () =>{
        setModal(!modal);
    }

    const body = (

        <div>
        <TaskCreator 
                callback={createTask}
                openCloseModal={openCloseModal}
            />
        </div>
    )


    return (  
        <div className="TareasPendientes">
        <Grid container spacing={3}>
            <Grid container justifyContent="center" >
            Tareas Pendientes
            </Grid>
            <Grid container justifyContent="center">
            <Button 
                variant="outlined" 
                color="primary"
                onClick={()=>openCloseModal()}
                startIcon={<CheckCircleOutlineIcon />}
                classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                
                >
                    Añadir una tarea</Button>    
            </Grid>
            <Grid item xs={12} >
              {taskTableRows}
            </Grid>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Modal
            open={modal}
            onClose = {openCloseModal}>
            {body}
        </Modal>
        </MuiPickersUtilsProvider>
        </div>
        
    
    
     );
}
 
export default TareasPendientes;