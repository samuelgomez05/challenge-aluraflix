import { TbTrash } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ video, bgCard }) => {
  const { id, title, category, image, videoLink, description } = video

  return (
    <article className={`${bgCard} flex flex-col overflow-hidden rounded-md p-1`}>
      <Link to="/no" className="grow">
        <figure className="aspect-video overflow-hidden rounded-md">
          <img className="aspect-video size-full object-cover object-center" src={image} alt={`Miniatura del video: ${title}`} />
        </figure>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-base font-semibold text-white md:text-lg">{title}</h3>
          <p className="line-clamp-2 text-pretty text-sm text-white/80 md:text-base">{description}</p>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-8 p-4">
        <a className="flex items-center gap-2 text-white hover:underline hover:underline-offset-2" href="">
          <TbEdit className="size-5" aria-hidden="true" />
          Editar
        </a>
        <a className="flex items-center gap-2 text-red-500 hover:underline hover:underline-offset-2" href="">
          <TbTrash className="size-5" aria-hidden="true" />
          Eliminar
        </a>
      </div>
    </article>
  )
}

export default Card