import Card from '../Card'

const SectionCards = ({ category, videos, handleCardClick, openModal, deleteCard }) => {
  const { title, bgColor } = category

  return (
    <>
      {
        videos.length > 0 &&
        <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8">
          <h2 className={`${bgColor} mb-6 w-max rounded-lg px-12 py-3 text-xl font-extrabold text-white`}>{title}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
              videos.map((video, index) => <Card 
                key={index}
                video={video}
                bgColor={bgColor}
                handleCardClick={handleCardClick}
                openModal={openModal}
                deleteCard={deleteCard}
              />)
            }
          </div>
        </section>
      }
    </>
  )
}

export default SectionCards