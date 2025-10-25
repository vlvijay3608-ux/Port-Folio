import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Portfolio from './component/Portfolio';


const App = () => {

  return (
    <>
    <div className="w-full h-full justify-center items-center"> 
    <BrowserRouter>
     <Link className='hover:underline hover:text bg-sky-400'to="/portfolio">Portfolio</Link>
    
    <Routes>
    <Route path='/portfolio'element={<Portfolio />}/>
   </Routes>
   </BrowserRouter>

    </div>
    </>
  )
};

export default App; 
