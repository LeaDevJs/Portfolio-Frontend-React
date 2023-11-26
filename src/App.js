import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Principal from "./components/Principal";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import HeaderEn from "./components/HeaderEn";
import PrincipalEn from "./components/PrincipalEn";
import SobreMiEn from "./components/SobreMiEn";
import SkillsEn from "./components/SkillsEn";
import ExperienceEn from "./components/ExperienceEn";
import PortfolioEn from "./components/PortfolioEn";
import FooterEn from "./components/FooterEn";
function App() {
  return (
    <>
    
     <Routes>
      
        
        <Route path="/es" element={
          <>
            <Header />
            <Principal />
            <SobreMi />
            <Skills />
            <Experience />
            <Portfolio />
            <Footer />
          </>
          }>
        </Route>

       
        <Route path="/en" element={
          <>
            
            <HeaderEn />
                 <PrincipalEn />
                 <SobreMiEn />
                 <SkillsEn />
                 <ExperienceEn />
                 <PortfolioEn />
                 <FooterEn /> 
          </>
          }>
        </Route>

        
        <Route path="/" element={
        <>
          <Header />
          <Principal />
          <SobreMi />
          <Skills />
          <Experience/>
          <Portfolio />
          <Footer />
          </>
          }>
        </Route>
      
        </Routes>
        
    </>
  );
}

export default App;
