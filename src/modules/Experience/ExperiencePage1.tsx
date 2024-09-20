import './Experience.css'

function ExperiencePage1() {
  return (
    <>
      <div className='experience'>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' rel='stylesheet'></link>
        <div className='page1-top'>
          <div className='container'>
            <div className='left-panel'>
              <p>
                <strong>EXPERIENCES</strong>
              </p>
              <p>2022 - present</p>
              <p>Backend Dev</p>
            </div>
            <div className='categories'>
              <div className='category'>
                <h3>INDIA</h3>
                <p>
                  <strong>Bangalore</strong>
                </p>
                <p>GR Grand Plaza, 2nd Floor, JP Nagar 6th Phase, Bangalore - 560078</p>
                <p>
                  <strong>Mangalore</strong>
                </p>
                <p>D.No. 1-N-5-39`/56, Bhandary Heights, Derebail Village Mangalore Taluk - 575006</p>
              </div>
              <div className='category'>
                <h3>USA</h3>
                <p>
                  <strong>Texas</strong>
                </p>
                <p>Epic Suites 4740 14th ST. suite T3, Plano, TX 75054</p>
                <p>
                  <strong>Miami</strong>
                </p>
                <p>1000 Island BLVD, #1806, Aventura Florida - 33160</p>
              </div>
              <div className='category'>
                <h3>UNITED KINGDOM</h3>
                <p>
                  <strong>London</strong>
                </p>
                <p>#152, City Road EC1V 2NX</p>
              </div>
              <div className='category'>
                <h3>SAUDI ARABIA</h3>
                <p>
                  <strong>Jeddah</strong>
                </p>
                <p>St Idris Square, 4036 Helmi Koutbi, Al Zahra, Jeddah 23425, Saudi Arabia</p>
              </div>
            </div>
          </div>
          <h1
            style={{
              fontFamily: '"Montserrat", "Lucida Console", "Courier New", monospace',
              paddingTop: '10%',
              paddingLeft: '7%',
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
