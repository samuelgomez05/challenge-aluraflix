const Banner = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/banner.webp')" }}>
      <div className="absolute inset-0 size-full bg-secondary/50"></div>
      <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col gap-12 px-4 py-20 md:h-[37.5rem] md:flex-row md:items-center md:px-8">
        <div className="flex flex-col gap-4 text-white md:w-1/2">
          <h1 className="text-3xl font-semibold md:text-5xl">Challenge React</h1>
          <h2 className="-order-1 mb-4 w-max rounded-lg bg-sky-400 px-6 py-3 text-xl font-extrabold">Front End</h2>
          <p className="text-pretty text-sm text-white/80 md:text-base">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <figure className="aspect-video overflow-hidden rounded-md md:w-1/2">
          <img className="aspect-video size-full object-cover object-center" src="/img/thumbnail-video-1.webp" alt="Miniatura del video Qué Significa Pensar Como Programador" />
        </figure>
      </div>
    </section>
  )
}

export default Banner