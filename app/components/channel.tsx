'use client'
import { playSound } from '../utils/soundManager';
import { useAudio } from '../utils/audioContext';
import Link from 'next/link'
import Image from 'next/image'

interface ChannelProps{
  name: string;
  image_source: string;
  linkTo: string;
}

export default function Channel({name, image_source, linkTo}: ChannelProps){
  const {audioUnlocked} = useAudio()

  return(
    <Link className='block w-full' href={linkTo}
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
      
      <div className="p-4 relative rounded-2xl bg-zinc-300/15 backdrop-blur-md shadow-lg overflow-hidden aspect-square border-2 border-white/40
                      hover:scale-110 hover:bg-cyan-400/80 hover:cursor-pointer
                      active:scale-95
                      transition-all duration-75">
        <div className='m-auto relative w-[95%] h-[95%]'>
          <Image src={image_source} alt={name} fill sizes='(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw' className="rounded-xl object-contain" />
        </div>

        { /* top shiny */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-linear-to-b from-white/40 to-transparent" />
        { /* inner border */}
        <div className="pointer-events-none absolute inset-0.5 rounded-[calc(var(--radius-2xl)-2px)] border border-white/20" />
        {/* shiny corners */}
        <div className='pointer-events-none absolute top-0 left-0 bg-radial from-white/80 to-transparent to-75% h-6 w-6 rounded-2xl' />
        <div className='pointer-events-none absolute top-4 left-0 bg-radial from-white/80 to-transparent to-75% h-4 w-4 rounded-2xl' />
        <div className='pointer-events-none absolute bottom-0 right-0 bg-radial from-white/80 to-transparent to-80% h-6 w-6 rounded-xl' />
        <div className='pointer-events-none absolute bottom-4 right-0 bg-radial from-white/80 to-transparent to-80% h-4 w-4 rounded-xl' />
        <p className='text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'>{name}</p>
      </div>
    </Link>
  )
}