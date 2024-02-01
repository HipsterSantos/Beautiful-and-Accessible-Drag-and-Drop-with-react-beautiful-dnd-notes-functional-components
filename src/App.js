import React from 'react';
import initialData from './initial-data';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';
class App extends React.Component {
  state = initialData
  onDragEnd(){

  }
  render() {
    return (
      <DragDropContext>
       { 
      this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />
        })
        }
    </DragDropContext>
  )
}
}
export default App;