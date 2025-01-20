import { useEffect, useRef } from "react";
import { TbX } from "react-icons/tb";
import Input from "../Input";
import Select from "../Select";
import Textarea from "../Textarea";

const ModalNewVideo = ({ modalNewVideo, closeModal, categories }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (modalNewVideo) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [modalNewVideo])

  const closeWithEsc = (e) => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  return (
    <dialog ref={modalRef} className="mx-auto w-[90%] max-w-lg rounded-md bg-slate-800 p-6 backdrop:bg-secondary/50" onKeyDown={(e) => closeWithEsc(e)}>
      <div className="mb-10 flex items-center justify-between gap-4 text-white">
        <h3 className="text-xl font-semibold">Nuevo video</h3>
        <button className="custom-focus-visible transition-colors duration-300 hover:text-primary" type="button" aria-label="Cerrar modal de nuevo video" onClick={closeModal}>
          <TbX className="size-6" aria-hidden="true" />
        </button>
      </div>
      <form id="form" className="flex w-full flex-col gap-6">
        <Input label="Título" id="title" type="text" placeholder="Ingresa el título del video" required />
        <Select categories={categories} />
        <Input label="Imagen" id="image" type="url" placeholder="Ingresa el enlace de la imagen del video" required />
        <Input label="Video" id="video" type="url" placeholder="Ingresa el enlace del video" required />
        <Textarea />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <button className="grow rounded-md border-2 border-primary bg-primary p-3 font-extrabold text-white transition-all duration-300 hover:saturate-150" type="submit">Guardar</button>
          <button className="grow rounded-md border-2 border-primary bg-primary/10 p-3 font-extrabold text-primary transition-colors duration-300 hover:bg-primary/20" type="reset">Limpiar</button>
        </div>
      </form>
    </dialog>
  )
}

export default ModalNewVideo