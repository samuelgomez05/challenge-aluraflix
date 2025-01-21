import { useEffect, useRef, useState } from "react";
import { TbX } from "react-icons/tb";
import Input from "../Input";
import Select from "../Select";
import Textarea from "../Textarea";

const FormVideo = ({ modalVideo, closeModal, categories, isEditing, formData, submitVideo }) => {
  const modalRef = useRef();
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [video, setVideo] = useState("")
  const [description, setDescription] = useState("")
  const [id, setId] = useState(null)

  useEffect(() => {
    if (modalVideo) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [modalVideo])

  useEffect(() => {
    setTitle(formData.title);
    setCategory(formData.category);
    setImage(formData.image);
    setVideo(formData.video);
    setDescription(formData.description);
    setId(formData.id);
  }, [formData]);

  const closeWithEsc = (e) => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  const cleanForm = () => {
    setTitle("")
    setCategory("")
    setImage("")
    setVideo("")
    setDescription("")
    setId(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVideo = { title, category, image, video, description, id };
    submitVideo(newVideo);
  };

  return (
    <dialog ref={modalRef} className="mx-auto w-[90%] max-w-lg rounded-md bg-slate-800 p-6 backdrop:bg-secondary/50" onKeyDown={(e) => closeWithEsc(e)}>
      <div className="mb-10 flex items-center justify-between gap-4 text-white">
        <h3 className="text-xl font-semibold">{isEditing ? "Editar video" : "Nuevo video"}</h3>
        <button className="custom-focus-visible transition-colors duration-300 hover:text-primary" type="button" aria-label="Cerrar modal de nuevo video" onClick={closeModal}>
          <TbX className="size-6" aria-hidden="true" />
        </button>
      </div>
      <form onSubmit={handleSubmit} id="form" className="flex w-full flex-col gap-6">
        <Input setValue={setTitle} label="Título" id="title" type="text" placeholder="Ingresa el título del video" value={title} required />
        <Select setValue={setCategory} categories={categories} value={category} />
        <Input setValue={setImage} label="Imagen" id="image" type="url" placeholder="Ingresa el enlace de la imagen del video" value={image} required />
        <Input setValue={setVideo} label="Video" id="video" type="url" placeholder="Ingresa el enlace del video" value={video} required />
        <Textarea setValue={setDescription} value={description} />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <button className="custom-focus-visible grow rounded-md border-2 border-primary bg-primary p-3 font-extrabold text-white transition-all duration-300 hover:saturate-150" type="submit">Guardar</button>
          <button onClick={cleanForm} className="custom-focus-visible grow rounded-md border-2 border-primary bg-primary/10 p-3 font-extrabold text-primary transition-colors duration-300 hover:bg-primary/20" type="button">Limpiar</button>
        </div>
      </form>
    </dialog>
  )
}

export default FormVideo