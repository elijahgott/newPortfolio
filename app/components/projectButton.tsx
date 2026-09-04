'use client'

import { useTheme } from "../utils/themeContext";
import { useAudio } from "../utils/audioContext";
import { playSound } from "../utils/soundManager";

import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ProjectButtonProps{
  'type': string,
  'link': string
}

export default function ProjectButton({type, link}: ProjectButtonProps){
  const { audioUnlocked } = useAudio()
  const { isLight } = useTheme()
  return(
    <div className="select-none flex p-4 w-full relative rounded-full bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden border-2 border-white/40
          hover:scale-105 hover:bg-cyan-400/80 hover:cursor-pointer
          active:scale-95 active:bg-cyan-500/80
          transition-all duration-75"
          onMouseEnter={() => {
            if(audioUnlocked){
              playSound('hover')
            }
          }}
          onClick={(e) => {
            e.stopPropagation()
            if(audioUnlocked){
              playSound('click')
            }
          }}>
          {/* top shiny */}
          {/* <div className='w-full h-[50%] pointer-events-none absolute left-0 top-0 rounded-t-lg bg-linear-to-b from-white/50' /> */}
          { /* inner border */}
          <div className="pointer-events-none absolute inset-0.5 rounded-full border border-white/20" />
          {/* shiny corners */}
          <div className={`pointer-events-none absolute top-4 left-6 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`pointer-events-none absolute top-8 left-4 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`pointer-events-none absolute bottom-4 right-6 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`pointer-events-none absolute bottom-8 right-4 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          {type == 'play' ?
            (
                <a href={link} target="_blank" className="w-full aspect-square my-auto">
                  <div className="relative flex items-center justify-center w-full h-full bg-linear-to-tl from-green-500/80 to-lime-400/80 rounded-full">
                    <PlayArrowIcon sx={{ fontSize: 120, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-white"/>
                  </div>
                </a>
            )
          :
            (
              <a href={link} target="_blank" className="w-full aspect-square rounded-full my-auto bg-linear-to-tl from-violet-600/80 to-fuchsia-400/80">
                <div className="relative flex items-center justify-center w-full h-full">
                  <GitHubIcon sx={{ fontSize: 120, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-black" />
                </div>
              </a>
            )
          }
        </div>
  )
}