import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Page404 from './pages/404';

function App() {
  const [modalVideo, setModalVideo] = useState(false)

  const openModalVideo = () => {
    setModalVideo(true)
  }

  const closeModalVideo = () => {
    setModalVideo(false)
  }

  return (
    <>
      <Router>
        <Header openModal={openModalVideo} />
        <Routes>
          <Route path="/" element={<Home modalVideo={modalVideo} openModalVideo={openModalVideo} closeModalVideo={closeModalVideo} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App