import React from 'react'
import { Task } from '../../types/model'
import { SingleTask } from '../taskItem/SingleTask'

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <SingleTask
          task={task}
          key={task.id}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </div>
  )
}
