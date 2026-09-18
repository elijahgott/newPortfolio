import { useTheme } from "../../utils/themeContext";
import { useTransition } from "../../utils/transitionContext";
import { useAudio } from "../../utils/audioContext";
import { playSound } from "../../utils/soundManager";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Link from "next/link";

interface buttonProps{
  direction: 'left' | 'right';
  link: string;
}

export default function ChangeProjectButton({direction, link} : buttonProps){
  const { isLight } = useTheme()
  const { audioUnlocked } = useAudio()
  const { setTransitionDirection } = useTransition()

  return(
    <div className={`select-none flex p-2 w-full relative rounded-full bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden border-2 border-white/40
          ${ link == 'N/A' ? '' : 'hover:scale-105 hover:bg-cyan-400/80 active:scale-95 active:bg-cyan-500/80'}
          hover:cursor-pointer
          transition-all duration-75`}
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
          <div className={`z-10 pointer-events-none absolute top-2 left-4 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`z-10 pointer-events-none absolute top-6 left-2 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`z-10 pointer-events-none absolute bottom-2 right-4 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`z-10 pointer-events-none absolute bottom-6 right-2 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />

          <Link href={link} onClick={() => setTransitionDirection(direction)} className={`${link == 'N/A' ? 'pointer-events-none' : ''} w-full aspect-square my-auto`}>
            <div className='relative flex items-center justify-center w-full h-full rounded-full' >
              {direction == 'left' ?
              <NavigateBeforeIcon sx={{ fontSize: {xs: 56,sm: 64, md: 72, lg: 80}, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-white" />
              :
              <NavigateNextIcon sx={{ fontSize: {xs: 56,sm: 64, md: 72, lg: 80}, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-white" />
            }
            </div>
          </Link>
        </div>
  )
}