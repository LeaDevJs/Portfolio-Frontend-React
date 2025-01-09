import "./App.css"
import { Route, Routes } from 'react-router-dom';

import HomeEs from "./components/HomeEs";


import HomeEn from "./components/HomeEn";
function App() {
  
  
  return (
    <>
    
     <Routes>
      
     
        
        <Route path="/es" element={
          
         
          <HomeEs />
          }>
        </Route>
          
       
        <Route path="/en" element={
          <>
          
          <HomeEn />
                 
          </>
          }>
        </Route>

        
        <Route path="/" element={
        <>
          
          <HomeEs />
          </>
          }>
        </Route>
        
        
        
        </Routes>
        
    </>
  );
}

export default App;
