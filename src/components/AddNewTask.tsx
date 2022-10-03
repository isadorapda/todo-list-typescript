import React from 'react'
import styled, { keyframes } from 'styled-components'
import { InputField } from './InputField'

const slideIn = keyframes`
  0%{
    transform: translateY(100%);
  }
  25%{
    transform: translateY(75%);
  }
  50%{
    transform: translateY(50%);
  }
  75%{
    transform: translateY(25%);
  }
  100%{
    transform: translateY(0%);
  }
`
const AddNewTaskConatiner = styled.div`
  background-color: white;
  box-shadow: 0 0 15px 1.3px #bdbdbd66;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  border-radius: 20px 20px 0 0;
  padding: 10px 5px;
  animation: ${slideIn} 0.2s ease-in;
`
const NewTaskWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-bottom: 10px;
  }
`

type Props = {
  addTask: (e: any) => void
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
  isAddTaskInputOpen: boolean
  onClickOutside: () => void
}

export const AddNewTask: React.FC<Props> = ({
  addTask,
  task,
  setTask,
  isAddTaskInputOpen,
  onClickOutside,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside()
      }
    }
    window.addEventListener('click', handleClickOutside, true)
    window.addEventListener('keydown', handleClickOutside, true)
    return () => {
      window.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])
  if (!isAddTaskInputOpen) {
    return null
  }
  return (
    <AddNewTaskConatiner ref={ref}>
      <NewTaskWrapper>
        <h3>New Task</h3>
        <InputField addTask={addTask} task={task} setTask={setTask} />
      </NewTaskWrapper>
    </AddNewTaskConatiner>
  )
}
