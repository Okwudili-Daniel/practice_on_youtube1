
import './App.css'
import {RouterProvider} from 'react-router-dom'
import { MainRouter } from './Router/MainRouter'

function App() {
  

  return (
    <>
     <RouterProvider
     router = {MainRouter}/>
    </>
  )
}

export default App
