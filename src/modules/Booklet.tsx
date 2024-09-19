import HTMLFlipBook from 'react-pageflip'
import './Booklet.css'
import Introduction from './Introduction'
import Skills from './Skills'
import ExperiencePage1 from './Experience/ExperiencePage1'
import constants from '../constants'
import Contents from './Contents'
import React from 'react'
import Education from './Education'
import Korus from './Projects/Korus'
import Scs from './Projects/Scs'
import Njs2 from './Projects/Njs2'
import OtherProjects from './Projects/Others'
import Quote from './Quote'
import ContentsCover from './ContentsCover'

const WhitePage = () => (
  <>
    <div style={{ background: 'white', width: '100%', height: '100%' }}></div>
  </>
)

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

export interface PageFlip {
  clear(): void
  destroy(): void
  flip(t2?: number, e2?: number): void
  flipNext(t2?: number): void
  flipPrev(t2?: number): void
  getBoundsRect(): number
  getCurrentPageIndex(): number
  getFlipController(): number
  getOrientation(): 'potrait' | 'landscape'
  getPage(t2: number): number
  getPageCollection(): {
    currentPageIndex: number
    currentSpreadIndex: number
    element: HTMLDivElement
    isShowCover: boolean
    landscapeSpread: Array<Array<number>>
    pages: Array<number>
    portraitSpread: Array<Array<number>>
  }
  getPageCount(): number
  getRender(): number
  getSettings(): number
  getState(): number
  getUI(): number
  loadFromHTML(t2: number): void
  loadFromImages(t2: number): void
  startUserTouch(t2: number): void
  turnToNextPage(): void
  turnToPage(t2: number): void
  turnToPrevPage(): void
  update(): void
  updateFromHtml(t2: number): void
  updateFromImages(t2: number): void
  updateOrientation(t2: number): void
  updatePageIndex(t2: number): void
  updateState(t2: number): void
  userMove(t2: number, e2: number): void
  userStop(t2: number, e2?: boolean): void
}

export interface FlipBookInterface {
  pageFlip(): PageFlip
}

const pages = [Introduction, ContentsCover, Contents, Skills, Education, Quote, ExperiencePage1, Korus, Scs, Njs2, OtherProjects, WhitePage]

interface BookletProps {
  bg: number
  setPageFlip: React.Dispatch<() => PageFlip>
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

let pageFlip: FlipBookInterface
const getPageFlip = () => pageFlip.pageFlip()

function Booklet(props: BookletProps) {
  return (
    <div id='booklet' style={{ background: `url("/backgrounds/${constants.BG_IMG.IMG_FILE(props.bg)}")` }}>
      <HTMLFlipBook
        {...bookletProps}
        ref={(component) => {
          pageFlip = component
          props.setPageFlip(getPageFlip)
        }}
      >
        {pages.map((PageComponent, index) => (
          <Page number={index + 1} key={index + 1}>
            <PageComponent pageFlip={getPageFlip} />
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default Booklet
