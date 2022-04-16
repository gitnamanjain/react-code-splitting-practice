import React from 'react'
function Home(props) {
  return (
    <>
    <ol>
          {props.books.map((item) => (
            <>
              <li>{item.title}</li>
            </>
          ))}
        </ol>
    </>
  )
}

export default Home