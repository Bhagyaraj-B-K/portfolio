import { PageFlip } from './Booklet'
import './Contents.css'

const contents = [
  { name: 'Skills', page: 2 },
  { name: 'Education', page: 3 },
  { name: 'Experience', page: 4 },
  { name: 'Projects', page: 5 }
]
function Contents(props: { pageFlip: () => PageFlip }) {
  return (
    <>
      <div className='contents'>
        <h2 style={{ textAlign: 'center', marginTop: '7%' }}>Table of Contents</h2> <hr />
        <div className='col-xs-12' style={{ marginTop: '7%' }}>
          {contents.map((item) => (
            <div key={item.page} className='toc-items'>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  const orientation = props.pageFlip().getOrientation()
                  const pageFlipIndex = orientation === 'landscape' ? item.page - 1 : item.page + 2
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
