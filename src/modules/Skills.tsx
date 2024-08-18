import skills from '../constants/skills'
import './Skills.css'

function Skills() {
  return (
    <>
      <div className='skills'>
        <h2 style={{ textAlign: 'center', marginTop: '5%', textDecoration: 'underline wavy 1.5px' }}>Skills</h2> <hr />
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h5 style={{ marginTop: '7%' }}>{category}</h5>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '5%' }}>
              {skills[category].map((skill) => (
                <div className='stamp-border' key={skill.title} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='stamp-border__content'>
                    <dfn title={skill.title}>
                      <img
                        src={skill.image}
                        alt={skill.title}
                        width='50'
                        height='50'
                        style={{
                          padding: '5%',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          borderRadius: '5px',
                          border: '3px solid #D39B44'
                        }}
                      />
                    </dfn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
