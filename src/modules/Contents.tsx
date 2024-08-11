import './Contents.css'

const contents = [
  { name: 'Skills', page: 4 },
  { name: 'Experience', page: 5 }
]
function Contents() {
  return (
    <>
      <div style={{ textAlign: 'center', width: '90%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginTop: '5%' }}>Table of Contents</h2> <hr />
        <div className='col-xs-12' style={{ marginTop: '7%' }}>
          {contents.map((item) => (
            <div key={item.page} className='crow' onClick={()=>{}}>
              <div>{item.name}</div>
              <div>{item.page}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contents
