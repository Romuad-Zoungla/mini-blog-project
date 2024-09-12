import { useParams } from 'react-router-dom';
const BlogDetail = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h2>Détails du Blog {id}</h2>
        {/* Utilise l'id pour récupérer et afficher les détails du blog */}
      </div>
    );
  };
  
  export default BlogDetail;

  