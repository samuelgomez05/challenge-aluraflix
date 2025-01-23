import { TbTrash } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";

const Card = ({ video, bgColor, handleCardClick, openModal, deleteCard }) => {
  const { id, title, image, description } = video

  const openWithKeys = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(id)
    }
  }

  return (
    <article className={`${bgColor} bg-opacity-10 flex flex-col overflow-hidden rounded-md p-1`}>
      <div onClick={() => handleCardClick(id)} onKeyDown={openWithKeys} className="custom-focus-visible group grow cursor-pointer" tabIndex="0" role="button" aria-label={`Ver video: ${title}`}>
        <figure className="relative aspect-video overflow-hidden rounded-md">
          <img className="aspect-video size-full object-cover object-center" src={image} alt={`Miniatura del video: ${title}`} loading="lazy" />
          <div className="pointer-events-none absolute inset-0 flex size-full select-none items-center justify-center bg-secondary/50 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span>
             <TbPlayerPlay className="size-12" aria-hidden="true" />
            </span>
          </div>
        </figure>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-base font-semibold text-white md:text-lg">{title}</h3>
          <p className="line-clamp-2 text-pretty text-sm text-white/80 md:text-base">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 p-4">
        <button className="custom-focus-visible flex items-center gap-2 text-white hover:underline hover:underline-offset-2" onClick={() => openModal(id)}>
          <TbEdit className="size-5" aria-hidden="true" />
          Editar
        </button>
        <button className="custom-focus-visible flex items-center gap-2 text-red-500 hover:underline hover:underline-offset-2" onClick={() => deleteCard(id)}>
          <TbTrash className="size-5" aria-hidden="true" />
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default Card