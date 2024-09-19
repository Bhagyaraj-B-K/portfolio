import { PageFlip } from './Booklet'
import './Contents.css'

const contents = [
  { name: 'Skillset', page: 2 },
  { name: 'Education', page: 3 },
  { name: 'Experience', page: 5 },
  { name: 'Projects', page: 6 }
]
// function Contents(props: { pageFlip: () => PageFlip }) {
//   return (
//     <>
//       <div className='contents'>
//         <h2 style={{ textAlign: 'center', marginTop: '7%' }}>Table of Contents</h2> <hr />
//         <div className='col-xs-12' style={{ marginTop: '7%' }}>
//           {contents.map((item) => (
//             <div key={item.page} className='toc-items'>
//               <div
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => {
//                   const orientation = props.pageFlip().getOrientation()
//                   const pageFlipIndex = orientation === 'landscape' ? item.page - 1 : item.page + 2
//                   props.pageFlip().flip(pageFlipIndex)
//                 }}
//               >
//                 {item.name}
//               </div>
//               <div>{item.page}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

function Contents(props: { pageFlip: () => PageFlip }) {
  return (
    <div className='content'>
      <div className='content-container'>
        {contents.map((item) => (
          <div className='content-item' key={item.page}>
            <div
              className='page-number'
              onClick={async () => {
                const orientation = props.pageFlip().getOrientation()
                if (orientation === 'portrait') return
                console.log(orientation)
                const pageFlipIndex = orientation === 'landscape' ? Math.floor((item.page - 2) / 2) : item.page - 2
                for (let i = 0; i < pageFlipIndex; i++) {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  props.pageFlip().flipNext()
                }
              }}
            >
              {item.page}
            </div>
            <div className='content-name'>{item.name.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contents
