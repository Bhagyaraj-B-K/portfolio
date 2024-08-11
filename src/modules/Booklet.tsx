import HTMLFlipBook from 'react-pageflip'
import './Booklet.css'
import Introduction from './Introduction'
import Skills from './Skills'
import Experience from './Experience'
import constants from '../constants'
import Contents from './Contents'
import React from 'react'

const Blank = () => <></>

const bookletProps = {
  className: 'magazine',
  width: 420,
  height: 594,
  size: 'fixed' as const,
  style: {},
  startPage: 0,
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 420,
  maxHeight: 1350,
  drawShadow: true,
  flippingTime: 1000,
  usePortrait: true,
  startZIndex: 0,
  autoSize: true,
  maxShadowOpacity: 0.5,
  showCover: true,
  mobileScrollSupport: true,
  clickEventForward: true,
  useMouseEvents: true,
  swipeDistance: 0,
  showPageCorners: true,
  disableFlipByClick: false
}

const pages = [Introduction, Blank, Contents, Skills, Experience]

interface BookletProps {
  bg: number
}

const Page = React.forwardRef(
  (
    props: {
      children: React.ReactNode
      number: number
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div className='bookletPages' ref={ref}>
        {props.children}
      </div>
    )
  }
)

function Booklet(props: BookletProps) {
  return (
    <div id='booklet' style={{ background: `url("/backgrounds/${constants.BG_IMG.IMG_FILE(props.bg)}")` }}>
      <HTMLFlipBook {...bookletProps}>
        {pages.map((PageComponent, index) => (
          <Page number={index + 1} key={index + 1}>
            <PageComponent />
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default Booklet
