import { TbChevronUp } from "react-icons/tb"

const GoToTop = ({ goToTop }) => {
  return (
    <button onClick={goToTop} className="fixed bottom-24 right-4 z-50 flex size-12 items-center justify-center rounded-full bg-primary p-2 text-white transition-all duration-300 hover:saturate-150 sm:bottom-8 md:right-8">
      <TbChevronUp className="size-6 text-white" />
    </button>
  )
}

export default GoToTop