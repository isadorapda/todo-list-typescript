import React from 'react'
import styled from 'styled-components'
import { Task } from '../types/model'
import { SingleTask } from './SingleTask'

const TaskListContainer = styled.div`
  width: 100%;
  max-height: 70%;
  overflow: auto;
`

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <SingleTask
          task={task}
          key={task.id}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </TaskListContainer>
  )
}
