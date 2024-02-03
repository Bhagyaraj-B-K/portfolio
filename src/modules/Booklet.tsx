import HTMLFlipBook from "react-pageflip";
import page1 from '/page1.jpg'

function Booklet () {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">
        <h1>Page1</h1>
        <img src = {page1} style={{height: '70%'}}/>
      </div>
      <div className="demoPage" style={{background: `url('/page2.jpg')`, backgroundSize: 'cover'}}>Page2</div>
      <div className="demoPage" style={{background: `url('/page3.jpg')`, backgroundSize: 'cover'}}>Page3</div>
      <div className="demoPage" style={{background: `url('/page3.jpg')`, backgroundSize: 'cover'}}>Page4</div>
      <div className="demoPage" style={{background: `url('/page3.jpg')`, backgroundSize: 'cover'}}>Page5</div>
      <div className="demoPage" style={{background: `url('/page3.jpg')`, backgroundSize: 'cover'}}>Page6</div>
      <div className="demoPage" style={{background: `url('/page3.jpg')`, backgroundSize: 'cover'}}>Page7</div>
      <div className="demoPage" style={{background: `url('/page3.jpg')`, backgroundSize: 'cover'}}>Page8</div>
    </HTMLFlipBook>
  );
}

export default Booklet