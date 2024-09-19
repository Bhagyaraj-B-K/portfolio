import { useState } from 'react'
import Booklet, { PageFlip } from './modules/Booklet'
import Hamburger from './modules/Hamburger'
import './App.css'
import constants from './constants'

function App() {
  const [bg, setBg] = useState(constants.BG_IMG.BG1)
  const [pageFlip, setPageFlip] = useState(() => () => ({}) as PageFlip)

  return (
    <>
      <div className='App'>
        <Hamburger bg={bg} changeBg={setBg} pageFlip={pageFlip} />
        <Booklet bg={bg} setPageFlip={setPageFlip} />
      </div>
    </>
  )
}

export default App
