import React, { useRef, useState } from 'react';
import f1 from '../../Image/f1.jpg';
import f2 from '../../Image/f2.jpg';
import f3 from '../../Image/f3.jpg';
import f4 from '../../Image/f4.jpg';
import f5 from '../../Image/f5.jpg';
import f6 from '../../Image/f6.jpg';
import f7 from '../../Image/f7.jpg';
import f8 from '../../Image/f8.jpg';
import './Features.css'; // Assuming you have a CSS file for styling

export default function Featuredata() {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleMouseDown = (e) => {
    if (!marqueeRef.current) return; // Null check
    setIsGrabbing(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  const handleMouseMove = (e) => {
    if (!isGrabbing) return;
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplier to control the speed of scrolling
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <>
          <div
        className={`marquee ${isGrabbing ? 'grabbing' : ''}`}
        ref={marqueeRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className={`marquee-content ${isPaused ? 'marquee-paused' : ''}`}>
          <div className="marquee-item">
            <img
              src={f1}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
            />
            <h5>DAILY EXERCISES </h5>
            <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f2} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>DEVELOPMENT CLASSES</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f3} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>ART AND CRAFTING</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f4} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>LEARNING WITH FUN</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f5} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>SPORTS TRAINING</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f6} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>SCIENCE LABS</h5>
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f7} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>COMPUTER LABS </h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f8} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
              <h5>SCHOOL LIBRARY</h5>
                  <hr className="horizontal-line" />
          </div>

          <div className="marquee-item">
            <img src={f1} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>DAILY EXERSICES </h5>
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f2} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>DEVELOPMENT CLASSES</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f3} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>ART AND CRAFTING</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f4} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>LEARNING WITH FUN</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f5} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>SPORTS TRAINING</h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f6} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>SCIENCE LABS</h5>
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f7} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
            <h5>COMPUTER LABS </h5>
            
                  <hr className="horizontal-line" />
          </div>
          <div className="marquee-item">
            <img src={f8} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}/>
              <h5>SCHOOL LIBRARY</h5>
                  <hr className="horizontal-line" />
          </div>
        </div>
      </div>
    </>
  );
}
