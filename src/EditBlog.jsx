import { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setAuthor(data.author);
        setBody(data.body);
        setLoading(false);
      })
      .catch(error => {
        toast.error("Une erreur s'est produite lors du chargement des données", {
          position: "top-right",
          autoClose: 3000,
        });
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const tmp_date = new Date().toISOString().split('T');
    const date = `${tmp_date[0]} ${tmp_date[1]}`;

    const updatedBlog = { title, author, body, date };

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBlog),
    })
    .then(() => {
      toast.success('Article modifié avec succès !', {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout (() => {
        navigate('/');
      },3000)

    })
    .catch(error => {
      toast.error("Une erreur s'est produite lors de la modification de l'article", {
        position: "top-right",
        autoClose: 3000,
      });
    });
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="create-blog">
      <ToastContainer />
      <h2>Modifier l'article</h2>
      <form onSubmit={handleUpdate} className='form'>
        <div className='form-group'>
          <label htmlFor="title">Titre de l'article</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div> 

        <div className='form-group'>
          <label htmlFor="author">Auteur</label>
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
        <div className='form-group'>
          <label htmlFor="body">Contenu</label>
          <textarea
            id="body"
            placeholder='Contenu'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="form-group Btn-Ajout">
          <button type="submit" className="btn-create">
            Modifier 
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
