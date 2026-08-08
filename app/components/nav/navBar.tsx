import MusicToggle from "./musicToggle"
import Image from 'next/image'
import { useMusic } from "@/app/utils/musicContext"

interface NavProps{
  audioUnlocked: boolean,
}

export default function NavBar({audioUnlocked} : NavProps){
  const { changeSong, volumeUp, volumeDown } = useMusic()
  return(
    <nav className="absolute bottom-0 my-8 py-4 flex flex-row space-x-8 items-center justify-center border w-dvw">
      <MusicToggle audioUnlocked={audioUnlocked} />
      <div className="max-w-20 aspect-square">
        <button>
          <Image onClick={() => changeSong('chill')} src='/chat.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        </button>
      </div>
      <div className="max-w-20 aspect-square">
        <Image src='/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      <div className="max-w-20 aspect-square">
        <button onClick={() => volumeUp()}>
          <Image src='/chat.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        </button>
      </div>
      <div className="max-w-20 aspect-square">
        <button onClick={() => volumeDown()}>
          <Image src='/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        </button>
      </div>
    </nav>
  )
}