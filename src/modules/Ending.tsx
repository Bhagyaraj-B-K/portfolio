import './Ending.css'
import { bio } from '../constants'

function Ending() {
  return (
    <div className='magazine-ending-outer'>
      <div className='magazine-ending'>
        <div className='center-piece'>
          <p style={{ fontSize: '3.5rem' }}>Thanks</p>
          <p style={{ marginTop: '-7%', marginLeft: '20%' }}>for Stopping by...</p>
        </div>
        <div className='magazine-ending-footer'>
          <p>{bio.user.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Ending
