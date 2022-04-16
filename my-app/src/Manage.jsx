import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Manage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete=()=>{
    props.deleteBook(id);
    navigate('/manage-books')
  }
  let bookexists = false;
  let author="";
  let pages=0;
  let title="";
  props.books.map((item) => {
    if (item.isbn == id) {
        bookexists = true
        author=item.author
        title=item.title
        pages=item.pages
        return item;   
    };
  });
  if (bookexists) {
    return (
      <>
        <div>ISBN - {id}</div>
        <div>Title - {title}</div>
        <div>Author - {author}</div>
        <div>Pages - {pages}</div>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Book Not Found</h2>
      </>
    );
  }
}

export default Manage;
