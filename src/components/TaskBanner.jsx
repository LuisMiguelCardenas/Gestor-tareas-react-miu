import React from 'react';

const TaskBanner = ({userName,taskItems}) => {
    return ( 
        <h4>
            Total de tareas de {userName} son: ({taskItems.filter(t => !t.done).length} de {taskItems.length})
        </h4>
     );
}
 
export default TaskBanner;