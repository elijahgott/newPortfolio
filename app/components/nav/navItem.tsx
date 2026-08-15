import { playSound } from "@/app/utils/soundManager";
import { useAudio } from "@/app/utils/audioContext";
import Image from 'next/image'

interface NavItemProps{
  name: string;
  linkTo: string;
  imageSource: string;
}

export default function NavItem({name, linkTo, imageSource}: NavItemProps){
  const { audioUnlocked } = useAudio()
  return (
    <a href={linkTo} target="_blank"
    onMouseEnter={() => {
      if(audioUnlocked){
        playSound('hover')
      }
    }}
    onClick={() => {
      if(audioUnlocked){
        playSound('click')
      }
    }} className="hover:scale-110 hover:cursor-pointer active:scale-95">{
      <div className="max-w-20 aspect-square">
        <Image src={imageSource} alt={name} width={200} height={200} style={{'imageRendering': 'pixelated'}} />
      </div>
    }</a>
  )
}