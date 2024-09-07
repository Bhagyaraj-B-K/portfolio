import './Experience.css'

function ExperiencePage1() {
  return (
    <>
      <div className='experience'>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' rel='stylesheet'></link>
        <div className='page1-top'>
          <div className='container'>
            <div className='left-panel'>
              <p>EXPERIENCES</p>
              <p>2022 - present</p>
              <p>Backend Dev</p>
            </div>
            <div className='categories'>
              <div className='category'>
                <h3>CATEGORY NAME 01</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
              </div>
              <div className='category'>
                <h3>CATEGORY NAME 02</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
              </div>
              <div className='category'>
                <h3>CATEGORY NAME 03</h3>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
              </div>
              <div className='category'>
                <h3>CATEGORY NAME 04</h3>
                <p>Etiam eget quam ut mi cursus gravida quis at felis. Morbi consectetur elit at ex tincidunt.</p>
              </div>
            </div>
          </div>
          <h1
            style={{
              fontFamily: '"Montserrat", "Lucida Console", "Courier New", monospace',
              paddingTop: '10%',
              paddingLeft: '30px',
              textAlign: 'left'
            }}
          >
            JUEGO STUDIOS
          </h1>
        </div>
        <img className='experience-1-image' src='/Juego.png' alt='Experience Page 1' />
      </div>
    </>
  )
}

export default ExperiencePage1
