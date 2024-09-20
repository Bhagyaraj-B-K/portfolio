import './Njs2.css'
import { projects } from '../../constants'
import { FaLink } from 'react-icons/fa'

function Njs2() {
  return (
    <div className='njs2'>
      <div className='magazine-container'>
        <div className='magazine-header'>
          <h1 className='magazine-title'>DESIGN</h1>
          <h2 className='magazine-subtitle'>NJS2</h2>
        </div>

        <div className='magazine-info'>
          <img src='/projects/juegologo.avif' alt='Profile' className='profile-image' style={{ width: '70px', height: '35px' }} />
        </div>

        <img src='/projects/njs2.png' alt='Profile' className='profile-image' style={{ marginTop: '10%', width: 'auto', height: '15%' }} />

        <div className='magazine-main-content'>
          <div className='njs2-left-panel'>
            <div className='important-title'>
              <h2>
                {projects.NJS2.name}{' '}
                <a href={projects.NJS2.link} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FaLink style={{ fontSize: 'small' }} />
                </a>
              </h2>
            </div>
            <p style={{ fontSize: 'xx-small' }}>{projects.NJS2.description}</p>
          </div>

          <div className='njs2-right-panel'>
            <div className='titles-section'>
              <div className='title-item'>
                <h3>{projects.NJS2cli.name}</h3>
                <p>{projects.NJS2cli.description}</p>
              </div>
              <div className='title-item'>
                <h3>{projects.NJS2registry.name}</h3>
                <p>{projects.NJS2registry.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Njs2
