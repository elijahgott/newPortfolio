'use client'
import { useTheme } from "../utils/themeContext";
import { useAudio } from "../utils/audioContext";
import { playSound } from '../utils/soundManager';

interface ContentContainerProps{
  children: React.ReactNode;
}

export default function ContentContainer({children}: ContentContainerProps){
  const {audioUnlocked} = useAudio()
  const {isLight} = useTheme()
  
  return(
    <div
    onMouseEnter={() => {
        if(audioUnlocked){
          playSound('hover')
        }
      }}
    className={`relative w-full mt-4 p-6 rounded-2xl border-2 border-transparent box-border ${isLight ? 'text-black' : 'text-white'}
    bg-zinc-500/20 shadow-[0px_24px_2px_-1px_rgba(0,0,0,0.3)]
     hover:border-cyan-400/80
      transition-all duration-75`}>
      { /* gradients along borders */ }
      <div className={`w-1/4 max-w-48 h-full pointer-events-none absolute left-0 top-0 rounded-l-xl bg-linear-to-r ${isLight ? 'from-white/50' : 'from-zinc-600'}`} />
      <div className={`w-[10%] h-full pointer-events-none absolute right-0 top-0 rounded-r-xl bg-linear-to-l ${isLight ? 'from-white/50' : 'from-zinc-600'}`} />
      <div className={`w-full h-1/4 max-h-100 pointer-events-none absolute left-0 top-0 rounded-t-xl bg-linear-to-b ${isLight ? 'from-white/50' : 'from-zinc-600'}`} />
      <div className={`w-full h-1/4 max-h-100 pointer-events-none absolute right-0 bottom-0 rounded-b-xl bg-linear-to-t ${isLight ? 'from-white/50' : 'from-zinc-600'}`} />
      {children}
    </div>
  )
}