import { useTheme } from "@/app/utils/themeContext";
import { playSound } from "@/app/utils/soundManager";
import { useMusic } from '../../utils/musicContext'
import { useAudio } from "@/app/utils/audioContext";

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

export default function MusicToggle(){
  const { isPlaying, toggleMusic } = useMusic()
  const { audioUnlocked, toggleAudio } = useAudio()
  const { isLight } = useTheme()

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
    }} className={`relative hover:scale-110 hover:cursor-pointer active:scale-95
    before:content-['Toggle_Audio'] before:pointer-events-none before:absolute before:z-50 before:w-max before:bg-linear-to-b ${ isLight ? 'before:from-zinc-300/70 before:to-white before:border-white/75' : 'before:text-white before:from-zinc-600/70 before:to-zinc-900 before:border-zinc-600/75'}  before:border-2  before:shadow-lg before:font-semibold before:p-4 before:rounded-xl before:top-[-50%] before:left-[50%] before:translate-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in
    hover:before:scale-100 hover:before:opacity-100`}>
      <div className="max-w-20 aspect-square">
        {
          isPlaying ?
          <MusicNoteIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-orange-600" />
          :
          <MusicOffIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-orange-600" /> // i want to add an animated psuedo element for the strike through the note
        }
      </div>
    </button>
  )
}