'use client'
import { useAudio } from "../utils/audioContext";
import { playSound } from '../utils/soundManager';

import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'

export default function HomeButton(){
  const {audioUnlocked} = useAudio()

  return (
    <div className="select-none flex items-center p-4 w-full aspect-square rounded-full relative bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden border-2 border-white/40
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
      <div className="pointer-events-none absolute inset-0.5 rounded-[calc(var(--radius-2xl)-2px)] border border-white/20" />
      {/* shiny corners */}
      <div className='pointer-events-none absolute top-0 left-0 bg-radial from-white/80 to-transparent to-75% h-6 w-6 rounded-2xl' />
      <div className='pointer-events-none absolute top-4 left-0 bg-radial from-white/80 to-transparent to-75% h-4 w-4 rounded-2xl' />
      <div className='pointer-events-none absolute bottom-0 right-0 bg-radial from-white/80 to-transparent to-80% h-6 w-6 rounded-xl' />
      <div className='pointer-events-none absolute bottom-4 right-0 bg-radial from-white/80 to-transparent to-80% h-4 w-4 rounded-xl' />

        <div className='flex flex-col items-center w-full'>
          <Link href="/" >
            <HomeIcon sx={{fontSize: 80}} className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
          </Link>
        </div>

    </div>
  )
}