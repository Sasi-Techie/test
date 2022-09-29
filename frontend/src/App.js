import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './pages/MyNotes/MyNotes';

const App = () => (
   <BrowserRouter>
        <Header></Header>   
        
            <Routes>
                <Route  path='/' element={<LandingPage/>} />
            <Route path='/mynotes' element={<MyNotes/>} />  
            </Routes> 
        
        <Footer></Footer>
    </BrowserRouter>
  
)

export default App;
