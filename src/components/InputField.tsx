import React from 'react'
import styled from 'styled-components'
import { GrAddCircle } from 'react-icons/gr'

const Form = styled.form`
  width: 60%;
  margin: auto;
  padding: 8px;
  display: flex;
  background-color: #76549a3e;
  border-radius: 10px;
  align-items: center;
  position: relative;
`
const Input = styled.input`
  width: 80%;
  padding: 5px 10px;
  border: none;
  text-transform: capitalize;
  background-color: transparent;
`
const BtnSubmit = styled.button`
  background-color: transparent;
  position: absolute;
  right: 10%;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.7rem;
  transition: all 0.2s;
  width: 5%;
  height: 100%;
`

type Props = {
  addTask: (e: any) => void
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
}

export const InputField: React.FC<Props> = ({ addTask, task, setTask }) => {
  return (
    <Form action="" onSubmit={addTask}>
      <Input
        type="text"
        value={task}
        placeholder="Type here..."
        onChange={(e: any) => setTask(e.target.value)}
      />
      <BtnSubmit type="submit">
        <GrAddCircle />
      </BtnSubmit>
    </Form>
  )
}
