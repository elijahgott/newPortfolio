'use client'

import { useTheme } from "../../utils/themeContext";
import { useAudio } from "../../utils/audioContext";
import { playSound } from "../../utils/soundManager";

import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ProjectButtonProps{
  'type': string,
  'link': string
}

export default function ProjectButton({type, link}: ProjectButtonProps){
  const { audioUnlocked } = useAudio()
  const { isLight } = useTheme()

  const playText = link == 'N/A' ? 'App Not Live' : 'Try App!'
  const gitHubText = 'Visit GitHub Repo!'
  const hoverText = type == 'play' ? playText : gitHubText

  return(
    <div data-text={hoverText} className={`relative select-none flex p-2 w-full rounded-full bg-zinc-300/15 backdrop-blur-md shadow-lg border-2 border-white/40
          ${ link == 'N/A' ? '' : 'hover:scale-105 hover:bg-cyan-400/80 active:scale-95 active:bg-cyan-500/80'}
          hover:cursor-pointer
          transition-all duration-75
          before:content-[attr(data-text)] before:pointer-events-none before:absolute before:z-50 before:w-max before:bg-linear-to-b ${ isLight ? 'before:from-zinc-300/70 before:to-white before:border-white/75' : 'before:text-white before:from-zinc-600/70 before:to-zinc-900 before:border-zinc-600/75'}  before:border-2 before:shadow-lg before:font-semibold before:p-4 before:rounded-xl before:top-[-25%] before:left-[50%] before:translate-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in
          hover:before:scale-100 hover:before:opacity-100`}
          onMouseEnter={() => {
            if(audioUnlocked && link !== 'N/A'){
              playSound('hover')
            }
          }}
          onClick={(e) => {
            e.stopPropagation()
            if(audioUnlocked && link !== 'N/A'){
              playSound('click')
            }
          }}>
          { /* inner border */}
          <div className="pointer-events-none absolute inset-0.5 rounded-full border border-white/20" />
          {/* shiny corners */}
          <div className={`z-10 pointer-events-none absolute top-4 left-6 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`z-10 pointer-events-none absolute top-8 left-4 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`z-10 pointer-events-none absolute bottom-4 right-6 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`z-10 pointer-events-none absolute bottom-8 right-4 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <a href={link} target="_blank" className={`${link == 'N/A' ? 'pointer-events-none' : ''} w-full aspect-square rounded-full my-auto bg-linear-to-tl ${type == 'play' ? `${link == 'N/A' ? 'from-zinc-500/80 to-zinc-400/80' : 'from-green-500/80 to-lime-400/80'}` : 'from-violet-600/80 to-fuchsia-400/80'} `}>
            <div className="relative flex items-center justify-center w-full h-full">
              { type == 'play' ?
                <PlayArrowIcon sx={{ fontSize: {xs: 56,sm: 64, md: 72, lg: 80}, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-white"/>
                :
                <GitHubIcon sx={{ fontSize: {xs: 56,sm: 64, md: 72, lg: 80}, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-black" />
              }
            </div>
          </a>
        </div>
  )
}