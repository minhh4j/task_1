import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addColor } from './todoSlice'
import { useNavigate } from 'react-router-dom'

function Vew() {
    const title = useSelector((state) => state.todos.value)
    const description = useSelector((state) => state.todos.value2)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleDone = (id) => {
        dispatch(addColor(id))
    }

  return (
    <div>
        {title.map((item) => (
            <>
            <h1 key={item.id}>{item.text}</h1>
            <button onClick={() => handleDone(item.id)}>Done</button>
            </>
        ))}
        <div>
            {description.map((item) => (
                <p key={item.id}>{item.text}</p>
            ))}
        </div>
       <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default Vew