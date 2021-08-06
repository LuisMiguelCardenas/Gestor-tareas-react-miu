import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import './TaskContainer.css'
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        border: '2px solid #000',
        boxShadow: theme.shadows[3],
        padding: theme.spacing(2, 7, 7),
        marginLeft: '10rem',
        marginTop: '5rem',
        backgroundColor: 'white',
      },
    },
  }));



const TaskCreator = ({callback,openCloseModal}) => {
    
    const classes = useStyles()

    

    const [newTaskName, setNewTaskName] = useState(' ')
    const updateNewTaskValue = e => setNewTaskName(e.target.value)
    const [newDescription, setNewDescription] = useState(' ')
    const updateNewDescriptionValue = e => setNewDescription(e.target.value)

    const [newNewDate, setNewNewDate] = useState(null)
    const [endNewDate, setEndNewDate] = useState(null)
    

    const [newNewTime, setNewNewTime] = useState(new Date())
    const [endNewTime, setEndNewTime] = useState(new Date())

    const createNewTask = () =>{
        callback(newTaskName,newDescription,newNewDate,endNewDate,newNewTime,endNewTime);
        setNewTaskName(' ');
        setNewDescription(' ')
        openCloseModal();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tarea creada exitosamente',
          showConfirmButton: false,
          timer: 2000
        }) 
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log( 'Email:', newTaskName, 'Password: ', newDescription); 

  }
    return ( 

        <>
        <Grid container  className={classes.root}>
        <div >
          
            <h2 className="titleModule">Crear una tarea</h2>
            <form className="fromCreateTask" onSubmit={handleSubmit}>
            <p>Nombre de la tarea</p>
            <Grid item >
            <TextField
                required
                id="filled-basic" 
                label="Filled" 
                variant="filled"
                value={newTaskName}
                onChange={updateNewTaskValue} 
                />

            <p>Descripción</p>
            <TextField
              value={newDescription}
              onChange={updateNewDescriptionValue}
              
              id="filled-full-width"
              label=""
              style={{ margin: 8 }}
              placeholder=""
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            </Grid>
            <Grid container spacing={2}>
            <Grid item>
            <TextField
              onChange={d => setNewNewDate(d.target.value)}
              label="Fecha inicio"
              type="date"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item>
            <TextField
              onChange={d => setNewNewTime(d.target.value)}
              label="Hora inicio"
              type="time"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item>
            <TextField
              onChange={d => setEndNewDate(d.target.value)}
              label="Fecha fin"
              type="date"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item>
            <TextField
              onChange={d => setEndNewTime(d.target.value)}
              label="Hora fin"
              type="time"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                justifyContent="flex-end" >
                <Grid item>
                <Button variant="contained" color="default" onClick={openCloseModal}>Cancelar</Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" type="submit" onClick={createNewTask}>Guardar</Button>
                </Grid>
            </Grid>            
            </form>
        </div>
        
        </Grid>
        
      </>
     );
}
 
export default TaskCreator ;