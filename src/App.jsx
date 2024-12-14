import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './assets/component/Home'
import Task from './assets/component/Task'
import Vew from './assets/component/Vew'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='taskpage' element={<Task/>}/>
        <Route path='taskvew/:id' element={<Vew/>} />
      </Routes>
    </Router>
  )
}

export default App