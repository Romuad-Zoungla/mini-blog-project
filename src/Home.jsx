
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => { 

const { data : blogs, loading,error }=useFetch('http://localhost:8000/blogs');
 
  return ( 
    <div className="home">
       {loading && <p>Chargement des articles...</p>} {/* Affichage pendant le chargement */}
       {error && <p style={{ color: "red" }}>Erreur : {error}</p>} {/* Affichage de l'erreur */}

      {/* Liste complète des blogs */}
      <BlogList blogs={blogs} title={"Liste des blogs"} /> 
 
    </div>
  );
}

export default Home;
