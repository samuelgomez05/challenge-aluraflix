import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import SectionCards from '../components/SectionCards'
import FormNewVideo from '../components/Form/FormNewVideo'
import GoToTop from '../components/GoToTop'


const Home = ({ modalNewVideo, closeModalNewVideo }) => {
  const [videos, setVideos] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState(1)
  const [dataBanner, setDataBanner] = useState({})

  const categories = [
    {
      "title": "Front End",
      "bgColor": "bg-sky-400",
    },
    {
      "title": "Back End",
      "bgColor": "bg-green-400",
    },
    {
      "title": "Inteligencia Artificial",
      "bgColor": "bg-orange-400",
    }
  ]

  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch("https://67870174c4a42c916105610e.mockapi.io/alura/videos")
      const data = await response.json()
      setVideos([...data])
    }

    fetchVideos()
  }, [])

  useEffect(() => {
    console.log('Tarjeta clickeada con ID:', selectedCardId);
    async function fetchVideos() {
      const response = await fetch(`https://67870174c4a42c916105610e.mockapi.io/alura/videos/${selectedCardId}`)
      const data = await response.json()
      setDataBanner(data)
      console.log('Datos de la tarjeta:', data);
    }

    fetchVideos()
  }, [selectedCardId])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 200);
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({ top: 0 })
  }

  const handleCardClick = (id) => {
    setSelectedCardId(id)
    goToTop()
  };

  return (
    <>
      <main className="bg-secondary pb-[5.5rem] sm:pb-0">
        <Banner 
          video={dataBanner} 
          bgColor={categories.filter((category) => category.title === dataBanner.category)[0]?.bgColor || "bg-primary"}
        />
        {
          categories.map((category) => <SectionCards
            key={category.title}
            category={category}
            videos={videos.filter((video) => video.category === category.title)}
            handleCardClick={handleCardClick}
          />)
        }
        <FormNewVideo 
          modalNewVideo={modalNewVideo} 
          closeModal={closeModalNewVideo}
          categories={categories.map((category) => category.title)}
        />
        {
          isScrolled && <GoToTop goToTop={goToTop} />
        }
      </main>
    </>
  )
}

export default Home