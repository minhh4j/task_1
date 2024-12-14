import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addColor } from './todoSlice'
import { useNavigate, useParams } from 'react-router-dom'

function Vew() {
    const title = useSelector((state) => state.todos.value)
    const description = useSelector((state) => state.todos.value2)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleDone = (id) => {
        dispatch(addColor(id))
    }

    const {id} = useParams()

    const titlefind = title.find((item) => item.id === parseInt(id) )
    console.log(title);
    

    const disfind = description.find((item) => item.id === parseInt(id))
    console.log(disfind)
  return (
    <div>
        <h2>{titlefind.text}</h2>
        <p>{disfind.text}</p>
        <button onClick={() => handleDone(parseInt(id))}>Done</button>
       <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default Vew