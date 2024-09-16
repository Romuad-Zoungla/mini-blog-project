import { Link } from "react-router-dom";
const PageNotFound = () => {
    return ( 

        <div className="page-404">
         <h1 >404</h1>
         <p>Oups ! La page que vous cherchez n'existe pas.</p>
         <Link to="/" className="btn-home">Retourner à l'accueil </Link>
        </div>
     );
}
 
export default PageNotFound;