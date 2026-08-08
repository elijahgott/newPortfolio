'use client'
import { createContext, useContext, useRef, useState, useEffect } from "react"

type MusicContextType = {
  isPlaying: boolean;
  playMusic: () => void;
  pauseMusic: () => void;
  toggleMusic: () => void;
}

const music = {
    "mainMenu": '/audio/bg/8bit-Bossa.mp3',
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

  return(
    <MusicContext.Provider
      value={{
        isPlaying,
        playMusic,
        pauseMusic,
        toggleMusic,
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