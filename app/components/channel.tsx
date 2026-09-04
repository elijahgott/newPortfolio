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
}

export default function Channel({name, imageSource, linkTo}: ChannelProps){
  const {audioUnlocked} = useAudio()
  const {isLight} = useTheme()

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
          <Image src={imageSource} alt={name} fill sizes='(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw' className="rounded-xl object-contain" style={{'imageRendering': 'pixelated'}} />
        </div>

        { /* top shiny */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-linear-to-b ${ isLight ? 'from-white/60' : 'from-white/30' }`} />
        { /* inner border */}
        <div className="pointer-events-none absolute inset-0.5 rounded-[calc(var(--radius-2xl)-2px)] border border-white/20" />
        {/* shiny corners */}
        <div className={`pointer-events-none absolute top-2 left-2 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
        <div className={`pointer-events-none absolute top-6 left-1 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
        <div className={`pointer-events-none absolute bottom-2 right-2 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />
        <div className={`pointer-events-none absolute bottom-6 right-1 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' }`} />

        <p className={`text-white text-center align-middle font-bold ${isLight ? 'drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]' : 'drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]'}`}>{name}</p>
      </div>
    </Link>
  )
}