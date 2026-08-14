'use client'
import MusicToggle from "./musicToggle"
import Image from 'next/image'
import { useMusic } from "@/app/utils/musicContext"
import { useAudio } from "@/app/utils/audioContext"

export default function NavBar(){
  const { changeSong, volumeUp, volumeDown } = useMusic()
  const { audioUnlocked } = useAudio()
  return(
    <nav className="absolute bottom-0 my-8 py-4 flex flex-row space-x-8 items-center justify-center w-dvw">
      <MusicToggle />
      <div className="max-w-20 aspect-square">
        <button>
          <Image onClick={() => changeSong('chill')} src='/ui/chat.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        </button>
      </div>
      <div className="max-w-20 aspect-square">
        <Image src='/ui/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      <div className="max-w-20 aspect-square">
        <button onClick={() => volumeUp()}>
          <Image src='/ui/chat.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        </button>
      </div>
      <div className="max-w-20 aspect-square">
        <button onClick={() => volumeDown()}>
          <Image src='/ui/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        </button>
      </div>
    </nav>
  )
}