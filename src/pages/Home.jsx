import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import SectionCards from '../components/SectionCards'
import FormNewVideo from '../components/Form/FormNewVideo'


const Home = ({ modalNewVideo, closeModalNewVideo }) => {
  const [videos, setVideos] = useState([])

  const categories = [
    {
      "title": "Front End",
      "bgTitle": "bg-sky-400",
      "bgCard": "bg-sky-400/10",
    },
    {
      "title": "Back End",
      "bgTitle": "bg-green-400",
      "bgCard": "bg-green-400/10",
    },
    {
      "title": "Inteligencia Artificial",
      "bgTitle": "bg-orange-400",
      "bgCard": "bg-orange-400/10",
    }
  ]

  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch("http://localhost:3000/videos")
      const data = await response.json()
      setVideos([...data])
    }

    fetchVideos()
  }, [])
  
  return (
    <>
      <main className="bg-secondary pb-[5.5rem] sm:pb-0">
        <Banner />
        {
          categories.map((category) => <SectionCards
            key={category.title}
            category={category}
            videos={videos.filter((video) => video.category === category.title)}
          />)
        }
        <FormNewVideo 
          modalNewVideo={modalNewVideo} 
          closeModal={closeModalNewVideo}
          categories={categories.map((category) => category.title)}
        />
      </main>
    </>
  )
}

export default Home