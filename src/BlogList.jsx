const BlogList = ({blogs, title}) => {

    return ( 
         <div className="bloglist">
        <h2>{title}</h2>
        { 
     blogs.map( blog => ( 
        <div className="blog" key={blog.id}>
          <a href="/" className="blog-titre">Le titre : {blog.title}</a>
          <p className="blog-content">{blog.body}</p>
          <small className="blog-publication-date">Publier le: {blog.date}</small>
          <p className="blog-author">Publier par : {blog.author}</p>
                       <button className="supp" >Supprimer</button>
        </div>
       )) 
        }
  
      </div> 
      )
    };  
  

 
export default BlogList;










