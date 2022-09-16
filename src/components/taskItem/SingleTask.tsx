import React, { useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import { Task } from '../../types/model'
import styles from './singleTaskStyles.module.css'
import { useRef } from 'react'

type Props = {
  task: Task
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const SingleTask: React.FC<Props> = ({ task, setTasks, tasks }) => {
  const [edit, setEdit] = React.useState<boolean>(false)
  const [editTask, setEditTask] = React.useState<string>(task.title)

  function setDoneHandler(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }
  function editHandler(e: any, id: string) {
    e.preventDefault()
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editTask } : task
      )
    )
    setEdit(false)
  }
  function deleteHandler(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form
      action=""
      className={styles.taskItem}
      onSubmit={(e) => editHandler(e, task.id)}
    >
      {edit ? (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          ref={inputRef}
        />
      ) : task.isDone ? (
        <s>
          <em>{task.title}</em>
        </s>
      ) : (
        <span>{task.title}</span>
      )}

      <div className={styles.icons}>
        <span
          title="Edit"
          className={styles.edit}
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          title="Delete"
          className={styles.delete}
          onClick={() => deleteHandler(task.id)}
        >
          <AiFillDelete />
        </span>
        <span title="Completed" className={styles.done}>
          <MdOutlineDone onClick={() => setDoneHandler(task.id)} />
        </span>
      </div>
    </form>
  )
}
