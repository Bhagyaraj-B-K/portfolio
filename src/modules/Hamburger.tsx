import { useState } from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import './Hamburger.css'
import constants from '../constants'
import Collapsible from '../components/Collapsible'
import ListGroup from '../components/ListGroup'
import { MdMenuBook, MdTableRestaurant } from 'react-icons/md'

interface HamburgerProps {
  bg: number
  changeBg: React.Dispatch<number>
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
    }
  ]

  return (
    <Menu right isOpen={isOpen} onOpen={toggleOpen} onClose={toggleOpen}>
      <Collapsible title='Background Themes' icon={<MdTableRestaurant />} classNames='' content={<ListGroup items={bgOptions} />} />
      <Collapsible title='Page Styles' icon={<MdMenuBook />} classNames='' content={<ListGroup items={[]} />} />
    </Menu>
  )
}

export default Hamburger
