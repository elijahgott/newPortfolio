'use client'
import { createContext, useContext, useState } from "react"

type AudioContextType = {
  audioUnlocked: boolean;
  enableAudio: () => void;
  disableAudio: () => void;
  setAudio: (bool: boolean) => void;
  toggleAudio: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null)

console.log("AUDIO PROVIDER CREATED");

export function AudioProvider({children}: {children: React.ReactNode}){
  const [audioUnlocked, setAudioUnlocked] = useState(false)

  const enableAudio = () => {
    setAudioUnlocked(true)
  }

  const disableAudio = () => {
    setAudioUnlocked(false)
  }

  const setAudio = (bool: boolean) => {
    setAudioUnlocked(bool)
  }

  const toggleAudio = () => {
    if (audioUnlocked){
      disableAudio()
    }
    else{
      enableAudio()
    }
  }

  return(
    <AudioContext.Provider
      value={{
        audioUnlocked,
        enableAudio,
        disableAudio,
        setAudio,
        toggleAudio
      }}
      >
        {children}
      </AudioContext.Provider>
  )
}

export function useAudio(){
  const context = useContext(AudioContext)

  if(!context){
    throw new Error('useAudio must be used inside AudioProvider')
  }
  return context
}