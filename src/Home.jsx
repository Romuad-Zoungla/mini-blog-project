import { useTranslation } from 'react-i18next';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => { 
  const {t}=useTranslation();

const { data : blogs, loading,error }=useFetch('http://localhost:8000/blogs?_sort=date&_order=desc'); 
 
  return ( 
    <div className="home">
       {loading && <p>{t('navbar.loading')}</p>} {/* Affichage pendant le chargement */}
       {error && <p style={{ color: "red" }}>Erreur : {error}</p>} {/* Affichage de l'erreur */}

      {/* Liste complète des blogs */}
      <BlogList blogs={blogs} title={"Liste des blogs"} />  
 
    </div>
  ); 
}

export default Home;
