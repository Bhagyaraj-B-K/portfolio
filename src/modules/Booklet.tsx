import HTMLFlipBook from "react-pageflip";
import './Booklet.css';
import Introduction from './Introduction';
import Skills from "./Skills";
import Experience from "./Experience";
import constants from "../constants";
import { useState } from "react";

const bookletProps = {
  className: "magazine",
  width: 420,
  height: 594,
  size: "fixed" as const,
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
  disableFlipByClick: false,
}

const pages = [
  Introduction,
  Skills,
  Experience,
];

interface BookletProps {
  bg: number;
}

function Booklet (props: BookletProps) {  
  const [flipbookStyle, setFlipbookStyle] = useState({
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0)',
    transition: 'box-shadow 0.7s ease-in-out',
    display: 'none',
    backgroundSize: 'cover',
  });
  return (
    <div  id="booklet" style={{background: `url("/backgrounds/${constants.BG_IMG.IMG_FILE(props.bg)}")`}}>
      <HTMLFlipBook {...bookletProps} style={flipbookStyle}
      onFlip={(e)=>{
        setFlipbookStyle({
          ...flipbookStyle,
          boxShadow: (e.data > 1 && e.data < (pages.length - 3)) 
          ? '0 0 20px 0 rgba(0, 0, 0, 0.5)' 
          : '0 0 20px 0 rgba(0, 0, 0, 0)',
        })
      }}>
        {pages.map((PageComponent, index) => (
          <div className="bookletPages" key={index}>
            <PageComponent />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Booklet