import { useState } from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import './Hamburger.css'
import constants from '../constants'
import Collapsible from '../components/Collapsible'
import ListGroup from '../components/ListGroup'
import { MdMenuBook, MdTableRestaurant } from 'react-icons/md'
import { PageFlip } from './Booklet'

interface HamburgerProps {
  bg: number
  changeBg: React.Dispatch<number>
  pageFlip: PageFlip | (() => PageFlip)
}

function Hamburger(props: HamburgerProps) {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  const bgOptions = [
    {
      name: 'Background 1',
      className: `menu-item ${props.bg == constants.BG_IMG.BG1 && 'active'}`,
      onClick: () => props.changeBg(constants.BG_IMG.BG1)
    },
    {
      name: 'Background 2',
      className: `menu-item ${props.bg == constants.BG_IMG.BG2 && 'active'}`,
      onClick: () => props.changeBg(constants.BG_IMG.BG2)
    },
    {
      name: 'Background 3',
      className: `menu-item ${props.bg == constants.BG_IMG.BG3 && 'active'}`,
      onClick: () => props.changeBg(constants.BG_IMG.BG3)
    },
    {
      name: 'Background 4',
      className: `menu-item ${props.bg == constants.BG_IMG.BG4 && 'active'}`,
      onClick: () => props.changeBg(constants.BG_IMG.BG4)
    }
  ]

  const pageFlip = props.pageFlip as PageFlip

  const pageFlipOnClick = async (page: number) => {
    const orientation = pageFlip.getOrientation()
    const pageFlipIndex = page > 0 && orientation === 'landscape' ? page - (page % 2 ? 0 : 1) : page
    let currentPageIndex = pageFlip.getCurrentPageIndex()
    while (currentPageIndex !== pageFlipIndex) {
      if (currentPageIndex < pageFlipIndex) {
        pageFlip.flipNext()
      } else {
        pageFlip.flipPrev()
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))
      currentPageIndex = pageFlip.getCurrentPageIndex()
    }
  }

  const contents = [
    { name: 'Introduction', page: 0, className: 'content-item', onClick: async () => pageFlipOnClick(0) },
    { name: 'Table of Contents', page: 2, className: 'content-item', onClick: async () => pageFlipOnClick(2) },
    { name: 'Skillset', page: 3, className: 'content-item', onClick: async () => pageFlipOnClick(3) },
    { name: 'Education', page: 4, className: 'content-item', onClick: async () => pageFlipOnClick(4) },
    { name: 'Experience', page: 6, className: 'content-item', onClick: async () => pageFlipOnClick(6) },
    { name: '⬩ Juego Studios', page: 6, className: 'content-sub-item', onClick: async () => pageFlipOnClick(6) },
    { name: 'Projects', page: 7, className: 'content-item', onClick: async () => pageFlipOnClick(7) },
    { name: '⬩ Korus', page: 7, className: 'content-sub-item', onClick: async () => pageFlipOnClick(7) },
    { name: '⬩ Super Club Soccer', page: 8, className: 'content-sub-item', onClick: async () => pageFlipOnClick(8) },
    { name: '⬩ NJS2 Framework', page: 9, className: 'content-sub-item', onClick: async () => pageFlipOnClick(9) },
    { name: '⬩ Other Projects', page: 10, className: 'content-sub-item', onClick: async () => pageFlipOnClick(10) }
  ]

  return (
    <Menu className='hamburger' right isOpen={isOpen} onOpen={toggleOpen} onClose={toggleOpen}>
      <Collapsible
        title='Background Themes'
        icon={<MdTableRestaurant />}
        classNames='bg-hb-menu'
        content={<ListGroup items={bgOptions} />}
      />
      <Collapsible title='Contents' icon={<MdMenuBook />} classNames='contents-hb-menu' content={<ListGroup items={contents} />} />
    </Menu>
  )
}

export default Hamburger
