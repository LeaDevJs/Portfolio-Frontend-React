import React from 'react';
import ExperienceEn from "../ExperienceEn";
import FooterEn from "../FooterEn";
import HeaderEn from "../HeaderEn";
import PortfolioEn from "../PortfolioEn";
import PrincipalEn from "../PrincipalEn";
import SkillsEn from "../SkillsEn";
import SobreMiEn from "../SobreMiEn";
import { useSpring, animated } from 'react-spring';

function HomeEn() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
  return (
    <div>
        <animated.div style={props}>
      <HeaderEn />
        <PrincipalEn />
        <SobreMiEn />
        <SkillsEn />
        <ExperienceEn />
        <PortfolioEn />
        <FooterEn />
        </animated.div>
    </div>
  )
}

export default HomeEn