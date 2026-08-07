import MusicToggle from "./musicToggle"
import Image from 'next/image'

export default function NavBar(){
  return(
    <nav className="absolute bottom-0 my-8 py-4 flex flex-row space-x-8 items-center justify-center border w-dvw">
      <MusicToggle />
      <div className="max-w-20 aspect-square">
        <Image src='/chat.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      <div className="max-w-20 aspect-square">
        <Image src='/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      <div className="max-w-20 aspect-square">
        <Image src='/chat.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      <div className="max-w-20 aspect-square">
        <Image src='/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
    </nav>
  )
}