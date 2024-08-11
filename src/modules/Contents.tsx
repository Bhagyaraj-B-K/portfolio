import { PageFlip } from './Booklet'
import './Contents.css'

const contents = [
  { name: 'Blank1', page: 2 },
  { name: 'Blank2', page: 3 },
  { name: 'Skills', page: 4 },
  { name: 'Experience', page: 5 }
]
function Contents(props: { pageFlip: () => PageFlip }) {
  return (
    <>
      <div style={{ textAlign: 'center', width: '90%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginTop: '5%' }}>Table of Contents</h2> <hr />
        <div className='col-xs-12' style={{ marginTop: '7%' }}>
          {contents.map((item) => (
            <div key={item.page} className='toc-items'>
              <div
                onClick={() => {
                  const orientation = props.pageFlip().getOrientation()
                  const pageFlipIndex = orientation === 'landscape' ? Math.ceil((item.page + 1) / 2) : item.page + 2
                  props.pageFlip().flip(pageFlipIndex)
                }}
              >
                {item.name}
              </div>
              <div>{item.page}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contents
