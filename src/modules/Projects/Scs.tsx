import './Scs.css'
import { projects } from '../../constants'

function Scs() {
  return (
    <div className='scs'>
      <div className='summary-container'>
        <div className='projects-header'>
          <span>Projects</span>
          <div className='horizontal-line'></div>
        </div>
        <div className='summary-header'>
          <h3 style={{ fontSize: 'x-large' }}>SCS</h3>
          <p>{projects.SCS.client}</p>
          <a
            href={projects.SCS.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            @steam/super-club-soccer
          </a>
        </div>

        <div className='summary-items'>
          <div className='summary-item'>
            <p>
              <strong>{projects.SCS.name}</strong>
            </p>
            <p>{projects.SCS.description}</p>
          </div>
        </div>
        <br />

        <div className='summary-image'>
          <img src='/projects/scs.webp' alt='Desert' className='summary-bottom-image' />
          <div className='bottom-link'>
            <a
              href={projects.SCS.link}
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              @{projects.SCS.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scs
