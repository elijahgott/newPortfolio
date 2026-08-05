import Image from 'next/image'

interface ChannelProps{
  name: string;
  image_source: string;
}

export default function Channel({name, image_source}: ChannelProps){
  return(
    <a href="#test">
      <div className="p-4 relative rounded-2xl bg-white/15 backdrop-blur-md shadow-lg overflow-hidden aspect-square border-2 border-white/40
                      hover:scale-110 hover:bg-cyan-400/80 hover:cursor-pointer
                      transition-all duration-75">
        { /* top shiny */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-linear-to-b from-white/40 to-transparent" />
        { /* inner border */}
        <div className="pointer-events-none absolute inset-0.5 rounded-[calc(theme(borderRadius.2xl)-2px) border border-white/20" />
        <Image src={image_source} width={200} height={200} alt="picture of gato" className="rounded-xl" />
        <p>{name}</p>
      </div>
    </a>
  )
}