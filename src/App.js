
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { useMediaQuery } from 'react-responsive';
import Mobile from './components/mobile/component';
import BigScreen from './components/big-screen/component';
import Desktop from './components/desktop/component';
import Laptop from './components/laptop/component';
import TabletMobile from './components/tablet-mobile/component';


const api="https://localhost:8000/employee";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  
  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
     
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
      <h1>React Responsive - a guide</h1>   
            {isMobileDevice && <Mobile />}
        {isTabletDevice && <>
        <TabletMobile />
        {isDesktop && <Desktop />}
        {isLaptop && <Laptop />}
        {isBigScreen && <BigScreen />}
      </>}
    </div>
  );

}

export default App;
