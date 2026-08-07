import { useState, useEffect, useRef } from "react"
import { playSound } from "@/app/utils/soundManager";
import Image from 'next/image'

interface MusicProps{
  audioUnlocked: boolean;
}

export default function MusicToggle({audioUnlocked} : MusicProps){
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

    if (audioUnlocked && musicOn){
      audioRef.current.play()
    }
    else{
      audioRef.current.pause()
    }
  }, [audioUnlocked, musicOn])

  return (
    <button
    onMouseEnter={() => {
      if(audioUnlocked){
        playSound('hover')
      }
    }}
    onClick={() => {
      setMusicOn((previous) => !previous)
      if(audioUnlocked){
        playSound('click')
      }
    }} className="hover:scale-110 hover:cursor-pointer active:scale-95">{
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