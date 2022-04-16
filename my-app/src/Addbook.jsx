import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addbook(props) {
   
  const [newbook, setnewbook] = useState({
    isbn: "",
    title: "",
    author: "",
    pages: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const value = event.target.value;
    setnewbook({
      ...newbook,
      [event.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setnewbook({
      isbn: newbook.isbn,
      title: newbook.title,
      author: newbook.author,
      pages: newbook.pages,
    });
    props.addbooks(newbook);
    
    navigate('/manage-books')
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newbook.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newbook.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ISBN"
          name="isbn"
          value={newbook.isbn}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Pages"
          name="pages"
          value={newbook.pages}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </>
  );
}

export default Addbook;
