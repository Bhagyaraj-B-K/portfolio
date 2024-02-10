import { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Hamburger.css";
import constants from "../constants";
import Collapsible from "../components/Collapsible";
import ListGroup from "../components/ListGroup";

interface HamburgerProps {
  bg : number,
  changeBg : Function
}

function Hamburger (props: HamburgerProps) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const bgOptions = [
    {
      name: 'BG 1',
      className: `menu-item ${(props.bg == constants.BG_IMG.BG1) && 'active'}`,
      onClick:()=>props.changeBg(constants.BG_IMG.BG1)
    },
    {
      name: 'BG 2',
      className: `menu-item ${(props.bg == constants.BG_IMG.BG2) && 'active'}`,
      onClick:()=>props.changeBg(constants.BG_IMG.BG2)
    },
    {
      name: 'BG 3',
      className: `menu-item ${(props.bg == constants.BG_IMG.BG3) && 'active'}`,
      onClick:()=>props.changeBg(constants.BG_IMG.BG3)
    },
  ];

  return (
    <Menu right isOpen={isOpen} onOpen={toggleOpen} onClose={toggleOpen}>
      <Collapsible title="Background Themes" classNames="col-md-12" content={<ListGroup items={bgOptions}/>}/>
    </Menu>
  );
};

export default Hamburger;