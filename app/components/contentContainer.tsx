'use client'
import { useAudio } from "../utils/audioContext";
import { playSound } from '../utils/soundManager';

interface ContentContainerProps{
  children: React.ReactNode;
}

export default function ContentContainer({children}: ContentContainerProps){
  const {audioUnlocked} = useAudio()
  
  return(
    <div
    onMouseEnter={() => {
        if(audioUnlocked){
          playSound('hover')
        }
      }}
      onClick={() => {
        if(audioUnlocked){
          playSound('click')
        }
      }}
    className='select-none relative w-full mt-4 p-6 rounded-2xl border-4 border-white
    bg-zinc-500/20 shadow-[0px_24px_2px_-1px_rgba(0,0,0,0.3)]
    dark:bg-gray-900 dark:bg-linear-70 dark:from-gray-900 dark:to-black
     hover:border-cyan-400/80 hover:cursor-pointer hover:border-8
      active:shadow-none active:translate-y-6
      transition-all duration-75'>
      { /* gradients along borders */ }
      <div className='w-[10%] h-full pointer-events-none absolute left-0 top-0 rounded-l-lg bg-linear-to-r from-white/50' />
      <div className='w-[10%] h-full pointer-events-none absolute right-0 top-0 rounded-r-lg bg-linear-to-l from-white/50' />
      <div className='w-full h-[50%] pointer-events-none absolute left-0 top-0 rounded-t-lg bg-linear-to-b from-white/50' />
      <div className='w-full h-[50%] pointer-events-none absolute right-0 bottom-0 rounded-b-lg bg-linear-to-t from-white/50' />
      {children}
    </div>
  )
}