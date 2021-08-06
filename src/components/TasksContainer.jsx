import React, {useState} from 'react';
import TaskRow from './TaskRow'
import TareasPendientes from './TareasPendientes';
import TareasCumplidas from './TareasCumplidas';
import {Grid,Box} from '@material-ui/core/';
import './TaskContainer.css'
import Swal from 'sweetalert2'

const Tareas = () => {

    const [taskItems, setTaskItems] = useState([
    {
      name: 'Task one', 
      done:false,
      description: 'Lorem',
      taskStartDate:'01/01/2021',
      taskEndDate:'01/10/2021',
      taskStartTime:'01/01/2021',
      taskEndDateTime:'01/10/2021',
    },
    {
      name: 'Task two', 
      done:false,
      description: 'Lorem' 
    },
    {
      name: 'Task three', 
      done:false,
      description: 'Lorem'
    },
    {
      name: 'Task four', 
      done:false,
      description: 'Lorem' 
    },
    {
      name: 'Task five', 
      done:true,
      description: 'Lorem' 
    },
    ])

  
    const createTask = (taskName,taskDescription,newDate,endDate,newTime,endTime)=>{
    if(!taskItems.find(t => t.name === taskName)){
      setTaskItems([...taskItems, 
        {
          name: taskName, 
          done:false, 
          description:taskDescription, 
          taskStartNewDate:newDate, 
          taskEndDate:endDate,
          taskStartNewTime:newTime, 
          taskEndTime:endTime
        }])
    }
    }

    console.log(taskItems)
    const toggleTask = (task)=> {
    setTaskItems(taskItems.map(t =>(t.name === task.name ? {...t, done:!t.done} : t) ))
    }


    const taskTableRows = (doneValue) =>{
    return(
      taskItems
      .filter(task => task.done === doneValue)
      .map(item => 
        <TaskRow
        key={item.name} 
        removeItem={removeItem}
          item ={item}
          toggleTask={toggleTask}
        />
    )
    
    )
    }

    const [toggle,setToggle] = useState(true)
  
    const removeItem = (name) => {
      const newTaskItems=taskItems.filter(item => item.name !== name)
      setTaskItems(newTaskItems)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tarea eliminada exitosamente',
        showConfirmButton: false,
        timer: 2000
      })    
    };
    return ( 
        <div className="Tareas">
        <Grid container justifyContent="center" spacing={2} height="100%">
            {toggle ? 
                <Grid item xs={10} height="100%">
                   <Box height="100%">
                    <TareasPendientes taskTableRows = {taskTableRows(false)} createTask={createTask} />
                   </Box>
                  <Grid container justifyContent="flex-start" alignItems="flex-end">
                    <Grid item>
                      <a href="#" onClick={()=>setToggle(!toggle)}> cumplidas</a>
                    </Grid>
                  </Grid>
                </Grid>
                :
                <Grid item xs={10} height="100%">
                  <Box height="100%">
                    <TareasCumplidas taskTableRows = {taskTableRows(true)}/> 
                  </Box>
                  <Grid container justifyContent="flex-start" alignItems="flex-end">
                    <Grid item>
                      <a href="#" onClick={()=>setToggle(!toggle)}> volver</a>
                    </Grid>
                  </Grid>
                </Grid>
            }
        </Grid>
        
        </div>
     );
}
 
export default Tareas;