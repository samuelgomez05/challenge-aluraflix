const Page404 = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-12 px-4 py-20 md:flex-row md:justify-evenly md:px-8">
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-3xl font-semibold text-white md:text-5xl">Página no encontrada</h1>
          <p className="text-pretty text-sm text-white/80 md:text-base">La página que estás buscando no existe o ha sido eliminada.</p>
        </div>
        <div className="aspect-square max-w-xl md:w-1/2">
          <img className="aspect-square size-full object-contain object-center" src="/img/illustration-404.svg" alt="Ilustración de página no encontrada, error 404" />
        </div>
      </div>
    </section>
  )
}

export default Page404