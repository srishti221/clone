import Header from './Header';
import SideBar from './SideBar';
import Left from './Left'
import RightF from './RightF';
import './Hey.css'
import Caller from './Caller';
import SideBaroption from './SideBaroption';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";




function Hey() {
  return (
    <>
    <div className='head'>
        <Header/>
      
      
      <div className='body'>
      
      <div className='sidebar'>
        <SideBar/>
      </div>

    

      
      <Router>
      <Routes>
        <Route exact path='/Left' Component={Left}/>
        
      </Routes>
    </Router>
        
      
      </div>
      </div>
    
    </>
  );
}

export default Hey;
