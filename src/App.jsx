
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AjouterArticle from './Ajouter';
import BlogDetail from './BlogDetail';
import LanguageSwitcher from './LanguageSwitcher';
import EditBlog from './EditBlog';
import PageNotFound from './PageNotFound';
function App() {

  return (  
    <Router> 
      <div className="App">
        <NavBar />
        <LanguageSwitcher />
        <div className="contenu">
        <Routes>
           <Route exact path='/' element={<Home />}/>
           <Route path='/Ajouter' element={<AjouterArticle />}/>
           <Route path='/blogs/:id' element={<BlogDetail/>}/>
           <Route path='/blogs/edit/:id' element={<EditBlog />} />
           <Route path='*' element={<PageNotFound />} /> 


        </Routes>
        </div>
      </div> 
    </Router> 


  );
}

export default App;
