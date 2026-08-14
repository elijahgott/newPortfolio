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
    }} className="hover:scale-110 hover:cursor-pointer active:scale-95">{
      isPlaying ?
      <div className="max-w-20 aspect-square">
        <Image src='/ui/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      :
      <div className="max-w-20 aspect-square">
        <Image src='/ui/music-off.png' alt='Music off' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
    }</button>
  )
}