import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Page404 from './pages/Page404';

function App() {
  const [modalNewVideo, setModalNewVideo] = useState(false)

  const openModalNewVideo = () => {
    setModalNewVideo(true)
  }

  const closeModalNewVideo = () => {
    setModalNewVideo(false)
  }

  return (
    <>
      <Router>
        <Header openModal={openModalNewVideo} />
        <Routes>
          <Route path="/" element={<Home modalNewVideo={modalNewVideo} closeModalNewVideo={closeModalNewVideo} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App