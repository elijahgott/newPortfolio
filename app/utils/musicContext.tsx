'use client'
import { createContext, useContext, useRef, useState, useEffect } from "react"

type MusicContextType = {
  isPlaying: boolean;
  playMusic: () => void;
  pauseMusic: () => void;
  toggleMusic: () => void;
  changeSong: (par: string) => void;
}

const music : {[key: string]: string } = {
    "mainMenu": '/audio/bg/8bit-Bossa.mp3',
    "chill": '/audio/bg/ChillLofiR.mp3' // for testing, may keep for settings or something else
  }

const MusicContext = createContext<MusicContextType | null>(null)

export function MusicProvider({children}: {children: React.ReactNode}){
  const bgMusic = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Create the audio object after the component mounts
  useEffect(() => {
    bgMusic.current = new Audio(music['mainMenu']);
    bgMusic.current.loop = true
  }, []);

  const playMusic = () => {
    if(!bgMusic.current) return
    bgMusic.current.play()
    setIsPlaying(true)
  }

  const pauseMusic = () => {
    if(!bgMusic.current) return
    bgMusic.current.pause()
    setIsPlaying(false)
  }

  const toggleMusic = () => {
    if(isPlaying){
      pauseMusic()
    }
    else{
      playMusic()
    }
  }

  const changeSong = (songName: string) => {
    pauseMusic()
    bgMusic.current = new Audio(music[songName]);
    bgMusic.current.loop = true
    playMusic()
  }

  return(
    <MusicContext.Provider
      value={{
        isPlaying,
        playMusic,
        pauseMusic,
        toggleMusic,
        changeSong,
      }}
      >
        {children}
      </MusicContext.Provider>
  )
}

export function useMusic(){
  const context = useContext(MusicContext)

  if(!context){
    throw new Error('useMusic must be used inside MusicProvider')
  }
  return context
}