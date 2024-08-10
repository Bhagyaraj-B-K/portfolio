import { useState } from 'react'
import Booklet from './modules/Booklet'
import Hamburger from './modules/Hamburger'
import './App.css'
import constants from './constants'

function App() {
  const [bg, setBg] = useState(constants.BG_IMG.BG1)

  return (
    <>
      <div className='App'>
        <Hamburger bg={bg} changeBg={setBg} />
        <Booklet bg={bg} />
      </div>
    </>
  )
}

export default App
