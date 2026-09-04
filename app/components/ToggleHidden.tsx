import { useState } from "react"

import { useTheme } from "../utils/themeContext"
import { useAudio } from "../utils/audioContext"
import { playSound } from "../utils/soundManager"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ToggleHiddenProps{
  children: React.ReactNode
}

export default function ToggleHidden({children}: ToggleHiddenProps){
  const [isHidden, setIsHidden] = useState(true)

  return(
    <div className="w-full">
      <div className={`${isHidden ? 'max-h-0' : 'max-h-125'} overflow-hidden transition-all duration-300`}>
        {children}
      </div>

      <Button isHidden={isHidden} setIsHidden={setIsHidden} />
    </div>
    
  )
}

function Button({isHidden, setIsHidden}: {isHidden: boolean, setIsHidden: (bool: boolean) => void}){
  const {audioUnlocked} = useAudio()
  const {isLight} = useTheme()

  return(
    <button className="select-none flex mx-auto mt-4 p-4 w-fit relative rounded-2xl font-bold bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden border-2 border-white/40
          hover:scale-105 hover:bg-cyan-400/80 hover:cursor-pointer
          active:scale-95 active:bg-cyan-500/80
          transition-all duration-75"
          onMouseEnter={() => {
            if(audioUnlocked){
              playSound('hover')
            }
          }}
          onClick={() => {
            setIsHidden(!isHidden)
            if(audioUnlocked){
              playSound('click')
            }
          }}>
          {/* top shiny */}
          {/* <div className='w-full h-[50%] pointer-events-none absolute left-0 top-0 rounded-t-lg bg-linear-to-b from-white/50' /> */}
          { /* inner border */}
          <div className="pointer-events-none absolute inset-0.5 rounded-[calc(var(--radius-2xl)-2px)] border border-white/20" />
          {/* shiny corners */}
          <div className={`pointer-events-none absolute top-0 left-0 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`pointer-events-none absolute top-4 left-0 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`pointer-events-none absolute bottom-0 right-0 bg-radial to-transparent to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          <div className={`pointer-events-none absolute bottom-4 right-0 bg-radial to-transparent to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
          
          {isHidden ?
            (
              <>
                <p>More</p>
                <KeyboardArrowDownIcon />
              </>
            ) : 
            (
              <>
                <p>Less</p>
                <KeyboardArrowUpIcon />
              </>
            )
          }
        </button>
  )
}