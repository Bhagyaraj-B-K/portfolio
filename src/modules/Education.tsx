import './Education.css'
import education from '../constants/education'

function Education() {
  return (
    <>
      <div className='education'>
        <h1 style={{ textAlign: 'center', marginTop: '7%', textDecoration: 'underline wavy 1.5px' }}>
          <strong>Education</strong>
        </h1>
        <hr />
        <img className='graduation-image' src='/graduation.png' alt='Education' width='55%' /> <hr />
        <div className='education-details'>
          <h5>
            <strong>
              {education.degree}, {education.graduationYear}
            </strong>
          </h5>
          <p>{education.university}</p>
          <h5 style={{ fontSize: '12px' }}>
            <strong>GPA: {education.gpa}</strong>
          </h5>
          <p style={{ fontSize: '9px' }}>{education.summary}</p>
        </div>
      </div>
    </>
  )
}

export default Education
