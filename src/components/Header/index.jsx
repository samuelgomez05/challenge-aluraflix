import { useLocation } from 'react-router-dom';
import { TbHome } from "react-icons/tb";
import { TbPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = ({ openModal }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-secondary">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-6 px-4 py-6 text-white sm:justify-between md:px-8">
        <Link to="/" className='custom-focus-visible'>
          <img className="aspect-[101/24] max-w-40" src="/img/logo.webp" alt="Logo de AluraFlix" />
        </Link>
        <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center gap-6 bg-secondary py-6 sm:static sm:py-0">
          <Link to="/" className="custom-focus-visible flex items-center gap-2 rounded-md border-2 border-primary bg-primary/10 px-4 py-2 font-extrabold text-primary transition-colors duration-300 hover:bg-primary/20">
            <TbHome className="size-5" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Inicio</span>
          </Link>
          {
            isHomePage && 
            <button className="custom-focus-visible flex items-center gap-2 rounded-md border-2 border-primary bg-primary/10 px-4 py-2 font-extrabold text-primary transition-colors duration-300 hover:bg-primary/20" onClick={openModal}>
              <TbPlus className="size-5" aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Nuevo video</span>
            </button>
          }
        </nav>
      </div>
    </header>
  ) 
}

export default Header