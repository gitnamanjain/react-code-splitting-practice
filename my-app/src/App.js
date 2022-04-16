import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Manage from './Manage';

const LazyManageBooks = React.lazy(() => import('./ManageBooks'));
const LazyAddBooks = React.lazy(() => import('./Addbook'));
function App() {

    const [books, setBooks] = useState([
        {
            "isbn": 9781593279509,
            "title": "Eloquent JavaScript, Third Edition",
            "author": "Marijn Haverbeke",
            "pages": 472
        },
        {
            "isbn": 9781491943533,
            "title": "Practical Modern JavaScript",
            "author": "Nicolás Bevacqua",
            "pages": 334
        },
        {
            "isbn": 9781593277574,
            "title": "Understanding ECMAScript 6",
            "author": "Nicholas C. Zakas",
            "pages": 352
        },
        {
            "isbn": 9781449365035,
            "title": "Speaking JavaScript",
            "author": "Axel Rauschmayer",
            "pages": 460
        },
        {
            "isbn": 9781449331818,
            "title": "Learning JavaScript Design Patterns",
            "author": "Addy Osmani",
            "pages": 254
        },
        {
            "isbn": 9798602477429,
            "title": "You Don't Know JS Yet",
            "author": "Kyle Simpson",
            "pages": 143
        },
        {
            "isbn": 9781484200766,
            "title": "Pro Git",
            "author": "Scott Chacon and Ben Straub",
            "pages": 458
        },
        {
            "isbn": 9781484242216,
            "title": "Rethinking Productivity in Software Engineering",
            "author": "Caitlin Sadowski, Thomas Zimmermann",
            "pages": 310
        }
    ])
    const addbooks = (incomobj) => {
        setBooks([...books, incomobj])
    }
    const deleteBook = (id) => {

        const newList = books.filter((item) => item.isbn != id);
        setBooks(newList)

    }
    console.log(books);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home books={books}></Home>} />
                    <Route path="/home" element={<Home books={books}></Home>} />
                    <Route path="/manage-books/:id" element={<Manage books={books} deleteBook={deleteBook}></Manage>} />
                    <Route
                        path="/manage-books/"
                        element={
                            <Suspense fallback="Loading">
                                <LazyManageBooks books={books} />
                            </Suspense>
                        }
                    ></Route>
                    {/* <Route path="/manage-books/" element={<ManageBooks books={books} ></ManageBooks>} /> */}
                    {/* <Route path="/add-books" element={<Addbook addbooks={addbooks}></Addbook>} /> */}
                    <Route
                        path="/add-books" element={
                            <Suspense fallback="Loading">
                                <LazyAddBooks books={books} />
                            </Suspense>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
