import { playSound } from "@/app/utils/soundManager";
import { useMusic } from '../../utils/musicContext'
import { useAudio } from "@/app/utils/audioContext";
import Image from 'next/image'


export default function MusicToggle(){
  const { isPlaying, toggleMusic } = useMusic()
  const { audioUnlocked, toggleAudio } = useAudio()
  return (
    <button
    onMouseEnter={() => {
      if(audioUnlocked){
        playSound('hover')
      }
    }}
    onClick={() => {
      if(!audioUnlocked){
        toggleAudio()
        toggleMusic()
        playSound('click')
      }
      else{
        toggleAudio()
        toggleMusic()
      }
    }} className="relative hover:scale-110 hover:cursor-pointer active:scale-95
    before:content-['Toggle_Music'] before:pointer-events-none before:absolute before:w-max before:bg-linear-to-t before:from-zinc-300/70 before:to-white before:border-2 before:border-white/75 before:shadow-lg before:font-semibold before:p-4 before:rounded-xl before:top-[-50%] before:left-[50%] before:translate-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in
    hover:before:scale-100 hover:before:opacity-100">
      <div className="max-w-20 aspect-square">
        {
          isPlaying ?
          <Image src='/ui/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
          :
          <Image src='/ui/music-off.png' alt='Music off' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
        }
      </div>
    </button>
  )
}