'use client'
import { useAudio } from "../utils/audioContext";
import { playSound } from '../utils/soundManager';

interface BubbleProps{
  type: string;
  children: React.ReactNode;
}

export default function Bubble({type, children}: BubbleProps){
  const {audioUnlocked} = useAudio()

  return (
    <div className="flex p-4 w-full relative rounded-2xl bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden border-2 border-white/40
                    hover:scale-105 hover:bg-cyan-400/80 hover:cursor-pointer
                    active:scale-95
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
      }}>
      { /* top shiny -- DOESNT WORK WHEN SUPER WIDE */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-linear-to-b from-white/40 to-transparent" /> */}
      { /* inner border */}
      <div className="pointer-events-none absolute inset-0.5 rounded-[calc(var(--radius-2xl)-2px)] border border-white/20" />
      {/* shiny corners */}
      <div className='pointer-events-none absolute top-0 left-0 bg-radial from-white/80 to-transparent to-75% h-6 w-6 rounded-2xl' />
      <div className='pointer-events-none absolute top-4 left-0 bg-radial from-white/80 to-transparent to-75% h-4 w-4 rounded-2xl' />
      <div className='pointer-events-none absolute bottom-0 right-0 bg-radial from-white/80 to-transparent to-80% h-6 w-6 rounded-xl' />
      <div className='pointer-events-none absolute bottom-4 right-0 bg-radial from-white/80 to-transparent to-80% h-4 w-4 rounded-xl' />
      {type == 'title' ?
        (
          <div className='flex items-center'>
            {children}
          </div>
        )
        :
        (
          <div className='flex flex-col items-center'>
            {children}
          </div>
        )
      }
    </div>
  )
}