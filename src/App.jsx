import { useState } from 'react'
import Todo from './components/Todo';
import './App.css'
import 'remixicon/fonts/remixicon.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Todo />
    </div>
  )
}

export default App
