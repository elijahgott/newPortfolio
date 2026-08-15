import { playSound } from "@/app/utils/soundManager";
import { useMusic } from '../../utils/musicContext'
import { useAudio } from "@/app/utils/audioContext";
import Image from 'next/image'


export default function VolumeUp(){
  const { audioUnlocked } = useAudio()
  const { volumeUp } = useMusic()
  return (
    <button
    onMouseEnter={() => {
      if(audioUnlocked){
        playSound('hover')
      }
    }}
    onClick={() => {
      if(audioUnlocked){
        volumeUp()
        playSound('click')
      }
    }} className="hover:scale-110 hover:cursor-pointer active:scale-95">{
      <div className="max-w-20 aspect-square">
        <Image src='/ui/volume-up.png' alt='Volume Up' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
    }</button>
  )
}