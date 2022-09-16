import React from 'react'
import { v4 as uuid } from 'uuid'
import { InputField } from './components/InputField'
import { Task } from './types/model'
import './App.css'
import { TaskList } from './components/TaskList/TaskList'

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [task, setTask] = React.useState<string>('')

  function addTask(e: any) {
    e.preventDefault()
    setTasks([...tasks, { title: task, id: uuid(), isDone: false }])
    setTask('')
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField addTask={addTask} task={task} setTask={setTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
