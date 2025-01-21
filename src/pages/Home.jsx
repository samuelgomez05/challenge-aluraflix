import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import SectionCards from '../components/SectionCards'
import FormVideo from '../components/Form/FormVideo'
import GoToTop from '../components/GoToTop'


const Home = ({ modalVideo, openModalVideo, closeModalVideo }) => {
  const [videos, setVideos] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState(1)
  const [dataBanner, setDataBanner] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: ""
  })

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
    async function fetchVideos() {
      const response = await fetch(`https://67870174c4a42c916105610e.mockapi.io/alura/videos/${selectedCardId}`)
      const data = await response.json()
      setDataBanner(data)
    }

    fetchVideos()
  }, [selectedCardId, videos])

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

  const openModalVideoEdit = (id) => {
    const videoToEdit = videos.find((video) => video.id === id);

    setFormData({
      title: videoToEdit.title,
      category: videoToEdit.category,
      image: videoToEdit.image,
      video: videoToEdit.video,
      description: videoToEdit.description,
      id: videoToEdit.id,
    });

    setIsEditing(true)
    openModalVideo()
  }

  const closeModal = () => {
    closeModalVideo()
    
    setTimeout(() => {
      setIsEditing(false)
      setFormData({
        title: "",
        category: "",
        image: "",
        video: "",
        description: ""
      })
    }, 300) // Para respetar la animacion del modal y no se vean como los datos desaparecen al salir de editar
  }

  const handleCreateVideoSubmit = async (newVideo) => {
    const response = await fetch("https://67870174c4a42c916105610e.mockapi.io/alura/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    });

    const createdVideo = await response.json();

    setVideos((prevVideos) => [...prevVideos, createdVideo]);
    
    closeModal();
};

const handleEditVideoSubmit = async (updatedVideo) => {
  const response = await fetch(`https://67870174c4a42c916105610e.mockapi.io/alura/videos/${updatedVideo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedVideo),
  });

  const updatedData = await response.json();

  setVideos((prevVideos) => prevVideos.map((video) => video.id === updatedData.id ? updatedData : video)
  );

  closeModal();
};

const handleDeleteVideo = async (id) => {
  const confirmation = confirm("¿Estás seguro que deseas eliminar este video?");

  if (confirmation) {
    const response = await fetch(`https://67870174c4a42c916105610e.mockapi.io/alura/videos/${id}`, {
      method: "DELETE",
    });
  
    const deletedVideo = await response.json();
  
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== deletedVideo.id));
  }
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
            openModal={openModalVideoEdit}
            deleteCard={handleDeleteVideo}
          />)
        }
        <FormVideo 
          modalVideo={modalVideo} 
          closeModal={closeModal}
          categories={categories.map((category) => category.title)}
          isEditing={isEditing}
          formData={formData}
          submitVideo={isEditing ? handleEditVideoSubmit : handleCreateVideoSubmit}
        />
        {
          isScrolled && <GoToTop goToTop={goToTop} />
        }
      </main>
    </>
  )
}

export default Home