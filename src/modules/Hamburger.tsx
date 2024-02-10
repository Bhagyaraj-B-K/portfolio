import { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Hamburger.css";
import constants from "../constants";

interface HamburgerProps {
  bg : number,
  changeBg : Function
}

function Hamburger (props: HamburgerProps) {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <span className="menu-item" onClick={()=>props.changeBg(0)} style={(props.bg == constants.BG_IMG.BG1) ? {color: 'red'} : {}}>
        BG 1
      </span>
      <span className="menu-item" onClick={()=>props.changeBg(1)} style={(props.bg == constants.BG_IMG.BG2) ? {color: 'red'} : {}}>
        BG 2
      </span>
      <span className="menu-item" onClick={()=>props.changeBg(2)} style={(props.bg == constants.BG_IMG.BG3) ? {color: 'red'} : {}}>
        BG 3
      </span>
    </Menu>
  );
};

export default Hamburger;