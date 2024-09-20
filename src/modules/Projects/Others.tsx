import './Others.css'
import { projects } from '../../constants'
import { FaLink } from 'react-icons/fa'

function OtherProjects() {
  return (
    <div className='other-projects'>
      <div className='projects-header'>
        <div className='horizontal-line'></div>

        <span>Other Projects</span>
      </div>
      <div className='article-section'>
        <div className='article-columns'>
          <div className='article-column'>
            <img src='/projects/ufo.jpg' alt='UFO Filmy muqabla' className='article-image' />
            <h3>
              {projects.UFOFilmyMuqabla.name}{' '}
              <a
                href={projects.UFOFilmyMuqabla.link}
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaLink />
              </a>
            </h3>
            <p>{projects.UFOFilmyMuqabla.description}</p>
          </div>
          <div className='article-column' style={{ paddingTop: '15%' }}>
            <img src='/projects/jhub.jpeg' alt='JHub' className='article-image' />
            <h3>
              {projects.JHub.name}{' '}
              <a href={projects.JHub.link} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaLink />
              </a>
            </h3>
            <p>{projects.JHub.description}</p>
          </div>
          <div className='article-column'>
            <img src='/projects/falcondash.jpg' alt='Article 2' className='article-image' />
            <h3>
              {projects.FalconDash.name}{' '}
              <a
                href={projects.FalconDash.link}
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaLink />
              </a>
            </h3>
            <p>{projects.FalconDash.description}</p>
          </div>
        </div>
      </div>
      <div className='last-horizontal-line'></div>
    </div>
  )
}

export default OtherProjects
