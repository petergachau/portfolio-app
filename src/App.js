import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MainHome from './components/MainHome';
import Projects from './components/Projects/Projects';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

<Routes>
  <Route path='/' element={<MainHome/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/projects' element={<Projects/>}></Route>
</Routes>

      </BrowserRouter>
      
<Footer/>
    </div>
  );
}

export default App;
