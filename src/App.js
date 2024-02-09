import React, {useState} from 'react';
import initialData from './initial-data';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';
function App (){
  const [state,setState] = useState(initialData)
  function onDragEnd(){

  }
    return (
      <DragDropContext>
       { 
      state.columnOrder.map((columnId) => {
;
        return <Column key={state.columns[columnId].id} column={state.columns[columnId]} tasks={state.columns[columnId].taskIds.map(taskId => state.tasks[taskId])} />
        })
      }
    </DragDropContext>
  )

}
export default App;