import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { store, store2 } from './todoSlice'

function Task() {

    const [task,setTask] = useState("")
    const [dis , setdis] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

  const handleSave = () => {
    navigate("/")
    dispatch(store(task))
    dispatch(store2(dis))
  }

  return (
    <div>
        <h3>task now</h3>
        <input type="text" placeholder='enter task' onChange={(e) => setTask(e.target.value)}  />

        <h3>Description</h3>
        <input type="text" placeholder='enter description'  onChange={(e) => setdis(e.target.value)}/>

        <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default Task