'use client' // use this when using useEffect 
import { useState, useEffect, useRef } from "react"
import Image from 'next/image'

export default function MusicToggle(){
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/audio/bg/8bit-Bossa.mp3') 
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      audioRef.current?.pause()
    }
  }, [])

  useEffect(() => {
    if(!audioRef.current) return

    if (musicOn){
      audioRef.current.play()
    }
    else{
      audioRef.current.pause()
    }
  }, [musicOn])

  return (
    <button onClick={() => setMusicOn((previous) => ! previous)} className="hover:scale-110 hover:cursor-pointer">{
      musicOn ?
      <div className="max-w-20 aspect-square">
        <Image src='/music-on.png' alt='Music playing' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
      :
      <div className="max-w-20 aspect-square">
        <Image src='/music-off.png' alt='Music off' width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
    }</button>
  )
}