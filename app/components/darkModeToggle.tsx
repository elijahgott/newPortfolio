'use client'

import { useTheme } from "../utils/themeContext";
import { useAudio } from "../utils/audioContext";
import { playSound } from '../utils/soundManager';

// mui icons
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeToggle(){
  const {audioUnlocked} = useAudio()
  const {isLight, setIsLight} = useTheme()

  return(
    <button className="select-none flex items-center p-4 w-full aspect-square rounded-full relative bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden border-2 border-white/40
        hover:scale-105 hover:bg-cyan-400/80 hover:cursor-pointer
        active:scale-95 active:bg-cyan-500/80
        transition-all duration-75"
        onMouseEnter={() => {
          if(audioUnlocked){
            playSound('hover')
          }
        }}
        onClick={() => {
          if(audioUnlocked){
            playSound('click')
          }
          setIsLight(!isLight)
        }}>
        { /* inner border */}
        <div className="pointer-events-none absolute inset-0.5 rounded-full border border-white/20" />
        {/* shiny corners */}
        <div className={`pointer-events-none absolute top-4 left-6 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
        <div className={`pointer-events-none absolute top-8 left-4 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
        <div className={`pointer-events-none absolute bottom-4 right-6 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
        <div className={`pointer-events-none absolute bottom-8 right-4 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />

        <div className='flex flex-col items-center w-full transition-all duration-500'>
          {isLight ?
            <LightModeIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-amber-300" />
            :
            <DarkModeIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-indigo-600" />
          }
        </div>
    </button>
  )
}