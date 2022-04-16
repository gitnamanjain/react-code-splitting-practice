import { useNavigate } from "react-router-dom";

function Home(props) {
    const navigate = useNavigate();

    const handleClick=(isbn)=>{
        navigate(`/manage-books/${isbn}`)
    }

  return (
    <>
      <ol>
        {props.books.map((item) => (
          <>
            <li>
              {item.title}
              <button onClick={()=>handleClick(item.isbn)}>Manage</button>
            </li>
          </>
        ))}
      </ol>
    </>
  );
}

export default Home;
