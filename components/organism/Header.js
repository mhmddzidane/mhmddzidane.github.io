import React from "react";
import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";

class Header extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x76679d,
      backgroundColor: 0x0,
      points: 8.0,
      maxDistance: 16.0,
      spacing: 13.0,
      showDots: false,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  render() {
    return (
      <div className="relative">
        <div ref={this.vantaRef} className="h-[70vh] w-full" />
        <p className="absolute top-[25vh] text-white font-light text-5xl left-0 right-0 text-center z-20">
          MUHAMMAD ZIDANE
        </p>
        <a href="https://drive.google.com/file/d/1RRPJpKwMLf0jv3dBAOQ3mLfwR8SkQ4b0/view?usp=sharing">
          <button className="absolute z-20 top-[50vh] text-white text-xl w-1/2 md:w-1/4 left-[25vw] md:left-[37vw] rounded-full text-center border-4 border-white">
            VIEW RESUME
          </button>
        </a>
        <div className="absolute bg-black opacity-50 top-0 h-full w-full"></div>
      </div>
    );
  }
}

export default Header;
