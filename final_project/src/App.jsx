import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SingleBook from './components/SingleBook/SingleBook';
import BookFromCategory from './components/BookFromCategory/BookFromCategory';
import About from './components/About/About';
import News from './components/News/News';
import Policy from './components/Policy/Policy';
import Adresses from './components/Adresses/Adresses';
import { fetchBooks } from './redux/ducks/bookDuck';
import { bookSelector } from './helpers/reduxSelectors';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
// import Layout from './components/Layout/Layout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const data = useSelector(bookSelector);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/adresses" element={<Adresses />} />

        <Route
          path="book/:id"
          element={<SingleBook data={data} />}
        />
        <Route
          path="/category/:id"
          element={<BookFromCategory data={data} />}
        />
        <Route
          path="/filter/:id"
          element={<BookFromCategory data={data} />}
        />
        <Route path="/" element={<Home data={data} />} />
      </Routes>

      <Footer />
    </>

  );
}

export default App;
