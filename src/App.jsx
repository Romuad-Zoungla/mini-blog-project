
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AjouterArticle from './Ajouter';
import BlogDetail from './BlogDetail';
function App() {

  return ( 
    <Router> 
      <div className="App">
        <NavBar />
        <div className="contenu">
        <Routes>
           <Route exact path='/' element={<Home />}/>
           <Route path='/Ajouter' element={<AjouterArticle />}/>
           <Route path='/blogs/:id' element={<BlogDetail/>}/>


        </Routes>
        </div>
      </div> 
    </Router> 


  );
}

export default App;
