import { playSound } from "@/app/utils/soundManager";
import { useMusic } from '../../utils/musicContext'
import Image from 'next/image'

interface MusicProps{
  audioUnlocked: boolean;
}

export default function MusicToggle({audioUnlocked} : MusicProps){
  const { isPlaying, toggleMusic } = useMusic()

  return (
    <button
    onMouseEnter={() => {
      if(audioUnlocked){
        playSound('hover')
      }
    }}
    onClick={() => {
      if(audioUnlocked){
        toggleMusic()
        playSound('click')
      }
    }} className="hover:scale-110 hover:cursor-pointer active:scale-95">{
      isPlaying ?
      <div className="max-w-20 aspect-square">
        <Image src='/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      :
      <div className="max-w-20 aspect-square">
        <Image src='/music-off.png' alt='Music off' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
    }</button>
  )
}