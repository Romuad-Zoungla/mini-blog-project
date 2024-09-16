import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AjouterArticle = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBlogAdding = (e) => {
    e.preventDefault();

    const tmp_date = new Date().toISOString().split('T');
    const date = `${tmp_date[0]} ${tmp_date[1]}`;

    const blog = { title, author, body, date };
    setLoading(true);

    // Simuler un délai pour que l'utilisateur voie l'état de chargement même avec des données locales
    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      })
        .then(() => {
          // Afficher le toast de succès
          toast.success('Article ajouté avec succès !', {
            position: "top-right",
            autoClose: 3000,
          } );

          // Délai pour permettre à l'utilisateur de voir le toast avant la redirection
          setTimeout(() => {
            navigate('/'); // Rediriger après 3 secondes
          }, 3000);

          setLoading(false);

          // Réinitialiser le formulaire
          setTitle('');
          setAuthor('');
          setBody('');
        })
        .catch(() => {
          // Afficher un toast en cas d'erreur
          toast.error("Une erreur s'est produite lors de l'ajout de l'article", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
        });
    }, 1000); // Simuler un délai de 1 seconde pour montrer le loading
  };

  return (
    <div className="create-blog">
      <ToastContainer /> {/* Conteneur pour les notifications */}

      <form onSubmit={handleBlogAdding} className="form">
        <div className="form-group">
          <label htmlFor="title">Titre de l'article</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Sélectionnez un auteur</label>
          <select
            required
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value=""></option>
            <option value="Tony">Tony</option>
            <option value="Duplex">Duplex</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="body">Contenu de l'article</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control textarea"
            id="body"
            rows="10"
          ></textarea>
        </div>

        <div className="form-group Btn-Ajout">
          {!loading && (
            <button type="submit" className="btn-create">
              Créer Article
            </button>
          )}
          {loading && <p className="btn-create disabled">En cours...</p>}
        </div>
      </form>
    </div>
  );
};

export default AjouterArticle;
