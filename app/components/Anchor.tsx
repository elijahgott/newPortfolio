'use client'
import { useAudio } from "../utils/audioContext";
import { playSound } from '../utils/soundManager';

import Link from "next/link";

interface AnchorProps{
  type: string;
  linkTo: string;
  children: React.ReactNode
}

export default function Anchor({type, linkTo, children}: AnchorProps){
  const {audioUnlocked} = useAudio()

  return type === 'external' ? 
  (
    <a href={linkTo} target="_blank" className="font-bold hover:text-cyan-500"
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
      {children}
    </a>
  )
  :
  (
    <Link href={linkTo} className="font-bold hover:text-cyan-500"
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
      {children}
    </Link>
  )
}