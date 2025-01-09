import React from 'react';
import Experience from "../Experience";
import Footer from "../Footer";
import Header from "../Header";
import Portfolio from "../Portfolio";
import Principal from "../Principal";
import Skills from "../Skills";
import SobreMi from "../SobreMi";
import { useSpring, animated } from 'react-spring';


function HomeEs() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <div>
      <animated.div style={props}>
      <Header />
        <Principal />
        <SobreMi />
        <Skills />
        <Experience />
        <Portfolio />
        <Footer />
        </animated.div>
    </div>
  )
}

export default HomeEs