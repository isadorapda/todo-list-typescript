import React from 'react'
import { GrAddCircle } from 'react-icons/gr'
import styles from './inputFieldStyle.module.css'

type Props = {
  addTask: (e: any) => void
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
}

export const InputField: React.FC<Props> = ({ addTask, task, setTask }) => {
  return (
    <form action="" onSubmit={addTask} className={styles.formNewTask}>
      <input
        type="text"
        value={task}
        placeholder="Type here..."
        onChange={(e: any) => setTask(e.target.value)}
        className={styles.inputNewTask}
      />
      <button type="submit" className={styles.btnAdd}>
        <GrAddCircle />
      </button>
    </form>
  )
}
