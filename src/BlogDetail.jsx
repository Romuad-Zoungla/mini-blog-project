import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from './useFetch';

// Important: Set the app element for accessibility with react-modal
Modal.setAppElement('#root');

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        toast.success("Article supprimé avec succès !", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((err) => {
        toast.error("Erreur lors de la suppression de l'article", {
          position: "top-right",
          autoClose: 3000,
        });
        console.error("Erreur lors de la suppression de l'article : ", err);
      });
    closeModal(); // Fermer le modal après suppression
  };

  return (
    <div className='blog'>
      <ToastContainer /> {/* Conteneur pour les notifications Toast */}
      {loading && <p>Chargement...</p>}
      {error && <p>Une erreur s'est produite : {error}</p>}
      {blogs && (
        <div className='blog'>
          <h2 className='blog-titre'>{blogs.title || 'Titre non disponible'}</h2>
          <small className='blog-publication-date'>
            {blogs.date ? `Créé le : ${blogs.date}` : 'Date non disponible'}
          </small>
          <p className='blog-body'>{blogs.body || 'Contenu non disponible'}</p>
          <p className='blog-author'>
            {blogs.author ? `Publié par : ${blogs.author}` : 'Auteur non disponible'}
          </p>
          <button onClick={() => navigate(`/blogs/edit/${id}`)} className='btn-edit'>Modifier l'article</button>
          <button onClick={openModal} className="btn-delete">Supprimer l'article</button>
    

          {/* Modal pour confirmation de suppression */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Confirmation de suppression"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>Confirmation</h2>
            <p>Êtes-vous sûr de vouloir supprimer cet article ?</p>
            <button onClick={handleDelete} className="btn-confirm">Oui</button>
            <button onClick={closeModal} className="btn-cancel">Non</button>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
