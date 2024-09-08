import './Korus.css'
import { projects } from '../../constants'

function Korus() {
  return (
    <div className='korus'>
      <div className='profile-container'>
        <div className='projects-header'>
          <span>Projects</span>
          <div className='horizontal-line'></div>
        </div>
        <div className='profile-section'>
          {/* Left Panel with Image and Details */}
          <div className='left-panel'>
            <div className='image-wrapper'>
              <img src='/projects/koruslogo.png' alt='Profile' className='profile-image' />
            </div>
            <div className='profile-details'>
              <h3>{projects.Korus.name}</h3>
              <p>{projects.Korus.client}</p>
              <a
                href={projects.Korus.link}
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                @{projects.Korus.link}
              </a>
            </div>
          </div>

          {/* Right Panel with Text */}
          <div className='right-panel'>
            <p>{projects.Korus.description}</p>
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className='bottom-image-section'>
        <img src='/projects/korus.webp' alt='Bottom' className='bottom-image' />
        <div className='bottom-link'>
          <a
            href={projects.Korus.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            @{projects.Korus.link}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Korus
