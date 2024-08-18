import './Education.css'
import education from '../constants/education'

function Education() {
  return (
    <>
      <div className='education'>
        <h2 style={{ textAlign: 'center', marginTop: '5%', textDecoration: 'underline wavy 1.5px' }}>Education</h2> <hr />
        <img className='graduation-image' src='/graduation.png' alt='Education' width='60%' /> <hr />
        <div className='education-details'>
          <h4>
            {education.degree}, {education.graduationYear}
          </h4>
          <p>{education.university}</p>
          <p>GPA: {education.gpa}</p>
          <p style={{ fontSize: '8px' }}>{education.summary}</p>
        </div>
      </div>
    </>
  )
}

export default Education
