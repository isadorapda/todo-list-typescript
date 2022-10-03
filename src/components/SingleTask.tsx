import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import { Task } from '../types/model'
import { useRef } from 'react'

const FormTaskItem = styled.form`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 15px auto 0 auto;
  padding: 5px 10px;
  border-bottom: 1px solid gray;
  text-transform: capitalize;
`
const InputEditTask = styled.input`
  width: 80%;
  border: none;
`

const IconsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
`
const Icon = styled.span<{ icon: string }>`
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    ${({ icon }) => {
      if (icon === 'done') {
        return css`
          color: #94b49f;
        `
      } else if (icon === 'delete') {
        return css`
          color: #df7861;
        `
      }
      return css`
        color: #76549a;
      `
    }}
  }
`
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

  const getTaskTitle = (): JSX.Element => {
    return task.isDone ? (
      <s>
        <em>{task.title}</em>
      </s>
    ) : (
      <span>{task.title}</span>
    )
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <FormTaskItem action="" onSubmit={(e) => editHandler(e, task.id)}>
      {edit ? (
        <InputEditTask
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          ref={inputRef}
        />
      ) : (
        getTaskTitle()
      )}

      <IconsDiv>
        <Icon
          icon="edit"
          title="Edit"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </Icon>
        <Icon
          icon="delete"
          title="Delete"
          onClick={() => deleteHandler(task.id)}
        >
          <AiFillDelete />
        </Icon>
        <Icon title="Completed" icon="done">
          <MdOutlineDone onClick={() => setDoneHandler(task.id)} />
        </Icon>
      </IconsDiv>
    </FormTaskItem>
  )
}
