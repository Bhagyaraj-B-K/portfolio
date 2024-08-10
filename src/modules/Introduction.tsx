import './Introduction.css'
import { bio } from '../constants'
import linkedInQR from '/profile/BhagyarajLinkedIn.svg'

function Introduction() {
  return (
    <div className='container h-100 magazine-cover'>
      <div className='row h-100'>
        <div className='col-md-12'>
          <div className='row'>
            <h1 className='font-weight-bold' style={{ color: '#D39B44', fontSize: '70px', paddingTop: '5px' }}>
              PORTFOLIO
            </h1>
          </div>
          <div className='row'>
            <div className='split-col' style={{ textAlign: 'left' }}>
              <p style={{ color: '#D39B44', fontSize: '18px', marginTop: '150px', fontStyle: 'bold' }}>
                Transforming <br />
                Ideas into Reality
              </p>
              <p style={{ color: 'whitesmoke', fontSize: '12px', marginTop: '-20px' }}>
                And, This is <br />
                {bio.user.name} <br />
                Who's living the Ideas
              </p>
              <h5 style={{ color: 'whitesmoke', margin: '50px 0 0 10px' }}>Since {bio.user.dob.getFullYear()}</h5>
              <img src={linkedInQR} alt='' width={'100px'} height={'100px'} style={{ margin: '10px 0 0 10px' }} />
            </div>
            <div className='split-col' style={{ textAlign: 'right' }}>
              <p style={{ color: 'whitesmoke', fontSize: '18px', paddingTop: '40px', fontStyle: 'bold' }}>
                Transforming <br />
                Ideas <br />
                into Reality
              </p>
              <p style={{ color: 'whitesmoke', fontSize: '12px', marginTop: '-20px' }}>
                And, This is <br />
                {bio.user.name} <br />
                Who's living the Ideas
              </p>
              <p
                style={{
                  color: '#D39B44',
                  fontSize: '18px',
                  paddingTop: '40px',
                  fontStyle: 'bold',
                  marginLeft: '40px',
                  lineHeight: '20px'
                }}
              >
                Working as <br />A {bio.currentCompany.designation}
              </p>
              <p style={{ color: '#D39B44', fontSize: '12px', margin: '-10px 0 0 60px', lineHeight: '15px' }}>
                in {bio.currentCompany.name}
              </p>
              <p style={{ color: '#D39B44', marginTop: '60px', lineHeight: '20px' }}>
                <span
                  style={{ fontSize: '60px', fontStyle: 'italic' }}
                >{`${bio.getTotalExperience.years}.${bio.getTotalExperience.months}`}</span>
                Yrs <br />
                of Professional <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
