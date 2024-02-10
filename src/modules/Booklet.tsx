import HTMLFlipBook from "react-pageflip";
import './Booklet.css';
import Introduction from './Introduction';
import Skills from "./Skills";
import Experience from "./Experience";
import constants from "../constants";

const bookletProps = {
  className: "magazine",
  width: 420,
  height: 594,
  size: "fixed" as const,
  style: {
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.5)',
    display: 'none',
    backgroundSize: 'cover',
  },
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
  showCover: false,
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
  return (
    <div  id="booklet" style={{background: `url("/backgrounds/${constants.BG_IMG.IMG_FILE(props.bg)}")`}}>
      <HTMLFlipBook {...bookletProps}>
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