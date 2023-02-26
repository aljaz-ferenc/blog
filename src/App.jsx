import './App.css'
import {Route, Routes} from 'react-router-dom'
import StateManagement from './pages/state-management/StateManagement'
import Home from './pages/Home'
import ReactRouter from './pages/react-router/ReactRouter'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/state-management' element={<StateManagement/>}/>
        <Route path='/react-router' element={<ReactRouter/>}/>
      </Routes>
    </div>
  )
}

export default App
