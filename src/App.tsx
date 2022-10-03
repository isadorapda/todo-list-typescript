import React from 'react'
import { v4 as uuid } from 'uuid'
import styled, { css } from 'styled-components'
import { Task } from './types/model'
import { TaskList } from './components/TaskList'
import { AddNewTask } from './components/AddNewTask'

const AppWrapper = styled.div<{ isAddInputOpen: boolean }>`
  width: 50vw;
  height: 80vh;
  overflow: auto;
  padding: 25px 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px 1.3px #bdbdbd47;
  border-radius: 10px;
  border: 5px solid white;
  margin: 50px auto;
  position: relative;
  h1 {
    margin-bottom: 25px;
  }
  ${({ isAddInputOpen }) =>
    isAddInputOpen
      ? css`
          background-color: #00000030;
        `
      : null}
`

const AddNewTaskButton = styled.button`
  cursor: pointer;
  background-color: #76549a;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: white;
  box-shadow: 0 2px 4px darkgray;
  border: none;
  position: absolute;
  bottom: 50px;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 4px darkgray;
  }
`

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [task, setTask] = React.useState<string>('')
  const [isAddTaskInputOpen, setIsAddTaskInputOpen] =
    React.useState<boolean>(false)

  function addTask(e: any) {
    e.preventDefault()
    setTasks([...tasks, { title: task, id: uuid(), isDone: false }])
    setTask('')
    setIsAddTaskInputOpen(false)
  }

  return (
    <AppWrapper isAddInputOpen={isAddTaskInputOpen}>
      <h1>Todo List</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <AddNewTaskButton
        onClick={() => setIsAddTaskInputOpen(true)}
        title="Add New Task"
      >
        +
      </AddNewTaskButton>
      {isAddTaskInputOpen ? (
        <AddNewTask
          addTask={addTask}
          task={task}
          setTask={setTask}
          isAddTaskInputOpen={isAddTaskInputOpen}
          onClickOutside={() => setIsAddTaskInputOpen(false)}
        />
      ) : null}
    </AppWrapper>
  )
}

export default App
