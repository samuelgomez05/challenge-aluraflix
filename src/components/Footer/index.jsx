import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 bg-secondary px-4 py-8 pb-[calc(5.5rem+2rem)] sm:pb-8 md:px-8">
      <img className="mx-auto aspect-[101/24] h-full max-w-40" src="/img/logo.webp" alt="Logo de AluraFlix" />
      <p className="text-center text-white/80">Desarrollado con ❤️ por Samuel Gomez - 2025</p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <a className="text-white/80 transition-colors duration-300 hover:text-white" href="https://github.com/samuelgomez05/challenge-aluraflix" target="_blank" rel="noopener noreferrer" aria-label="Ir al repositorio de AluraFlix de Samuel Gomez">
          <TbBrandGithub className="size-5" aria-hidden="true" />
        </a>
        <a className="text-white/80 transition-colors duration-300 hover:text-white" href="https://www.linkedin.com/in/samuel-gomez-6547332b5" target="_blank" rel="noopener noreferrer" aria-label="Ir al perfil de Linkedin de Samuel Gomez">
          <TbBrandLinkedin className="size-5" aria-hidden="true" />
        </a>
        <a className="text-white/80 transition-colors duration-300 hover:text-white" href="mailto:gomezapari20@gmail.com" aria-label="Enviar un correo a Samuel Gomez">
          <TbMail className="size-5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer