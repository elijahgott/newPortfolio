import { playSound } from "@/app/utils/soundManager";
import { useMusic } from '../../utils/musicContext'
import { useAudio } from "@/app/utils/audioContext";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';

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
    }} className="relative hover:scale-110 hover:cursor-pointer active:scale-95 rounded-full
    before:content-['Volume_Up'] before:pointer-events-none before:absolute before:w-max before:bg-linear-to-t before:from-zinc-300/70 before:to-white before:border-2 before:border-white/75 before:shadow-lg before:font-semibold before:p-4 before:rounded-xl before:top-[-50%] before:left-[50%] before:translate-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in
    hover:before:scale-100 hover:before:opacity-100">
      <div className="max-w-20 aspect-square">
        <VolumeUpIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-green-500" />
      </div>
    </button>
  )
}