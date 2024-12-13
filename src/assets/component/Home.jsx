import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TodoDelete } from './todoSlice'

function Home() {
    const navigate = useNavigate()

    const todo1 = useSelector((state) => state.todos.value)

    const dispatch = useDispatch()
  

    const hnadleName = (id) => {
        navigate("/taskvew")
        
       }

    const handleDelete = (index) => {
        dispatch(TodoDelete(index))
        navigate("/")
    }



  return (
    <div>
        <h1>Home</h1>
       <div>
        <button onClick={() =>  navigate("/taskpage")}>+</button>
       </div>
       {todo1.map((item,index) => (
        <ul key={index}>
            <li onClick={() => hnadleName(item.id)} style={{backgroundColor:item.color}}>{item.text} <button onClick={() => handleDelete(index)}>Delete</button></li>
        </ul>
       ))}
    </div>
  )
}

export default Home