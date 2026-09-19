'use client'
import { useTheme } from '../utils/themeContext';
import { playSound } from '../utils/soundManager';
import { useAudio } from '../utils/audioContext';
import Link from 'next/link'
import Image from 'next/image'

interface ChannelProps{
  name: string;
  imageSource: string;
  linkTo: string;
  pixelated: boolean;
}

export default function Channel({name, imageSource, linkTo, pixelated}: ChannelProps){
  const {audioUnlocked} = useAudio()
  const {isLight} = useTheme()

  return(
    <Link href={linkTo} className={`relative block w-full aspect-square rounded-2xl bg-zinc-300/15 backdrop-blur-xs shadow-lg border-2 border-white/40
    hover:scale-110 hover:bg-cyan-400/80 hover:cursor-pointer
    active:scale-95
    transition-all duration-100 ease-out
    before:content-[attr(data-name)] before:text-white before:font-bold before:text-center before:pointer-events-none before:absolute before:z-50 before:w-full md:before:w-max before:bg-linear-to-b before:from-cyan-300/80 before:to-cyan-400 before:border-2 before:border-cyan-300/90 before:p-1 md:before:p-2 lg:before:p-4 before:rounded-full before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in-out
    hover:before:scale-100 hover:before:opacity-100`} data-name={name}
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
      
      <div className="w-full h-full relative flex
      p-1 md:p-2 lg:p-4">
        <div className='m-auto relative w-[95%] h-[95%]'>
          <Image src={imageSource} alt={name} fill sizes='(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw' className="rounded-xl object-contain" style={pixelated ? {imageRendering: 'pixelated'} : {}} />
        </div>

        { /* top shiny */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-cover bg-linear-to-b ${ isLight ? 'from-white/60' : 'from-white/30' }`} />
        { /* inner border */}
        <div className="pointer-events-none absolute inset-0.5 rounded-[calc(var(--radius-2xl)-2px)] border border-white/20" />
        {/* shiny corners */}
        <div className={`pointer-events-none absolute top-2 left-2 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
        <div className={`pointer-events-none absolute top-6 left-1 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
        <div className={`pointer-events-none absolute bottom-2 right-2 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
        <div className={`pointer-events-none absolute bottom-6 right-1 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
      </div>
    </Link>
  )
}