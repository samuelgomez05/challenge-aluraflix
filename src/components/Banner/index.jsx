import 'lite-youtube-embed/src/lite-yt-embed.js';
import 'lite-youtube-embed/src/lite-yt-embed.css';

const Banner = ({ video, bgColor }) => {
  const { title, category, image, video: videoUrl, description } = video
  let videoUrlId;
  
  if (videoUrl) {
    const url = new URL(videoUrl);
    videoUrlId = url.searchParams.get('v');
  }

  return (
    <section className="relative bg-cover bg-center bg-no-repeat [mask-image:linear-gradient(black_90%,transparent)]" style={{ backgroundImage: "url('/img/banner.webp')" }}>
      <div className="absolute inset-0 size-full bg-secondary/50"></div>
      <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col gap-12 px-4 py-20 md:h-[37.5rem] md:flex-row md:items-center md:px-8">
        <div className="flex flex-col gap-4 text-white md:w-1/2">
          <h1 className="text-3xl font-semibold md:text-5xl">{title}</h1>
          <h2 className={`${bgColor} -order-1 mb-4 w-max rounded-lg px-6 py-3 text-xl font-extrabold`}>{category}</h2>
          <p className="text-pretty text-sm text-white/80 md:text-base">{description}</p>
        </div>
        <div className="aspect-video overflow-hidden rounded-md md:w-1/2">
          <lite-youtube 
            key={videoUrlId} // para que react renderize otra vez el video si cambia el id
            videoid={videoUrlId} 
            playlabel={`Reproducir video: ${title}`}
            style={{ backgroundImage: `url("${image}")` }}
          >
          </lite-youtube>
        </div>
      </div>
    </section>
  )
}

export default Banner