import { playSound } from "@/app/utils/soundManager";
import { useAudio } from "@/app/utils/audioContext";

// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

interface NavItemProps{
  name: string;
  linkTo: string;
}

export default function NavItem({name, linkTo}: NavItemProps){
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
    }} className="relative hover:scale-110 hover:cursor-pointer active:scale-95
    before:content-[attr(data-name)] before:pointer-events-none before:absolute before:z-50 before:w-max before:bg-linear-to-t before:from-zinc-300/70 before:to-white before:border-2 before:border-white/75 before:shadow-lg before:font-semibold before:p-4 before:rounded-xl before:top-[-50%] before:left-[50%] before:translate-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in
    hover:before:scale-100 hover:before:opacity-100"
    data-name={name}>{
      <div className="max-w-20 aspect-square">
        { name === 'Elijah Gott | LinkedIn' ?
          <LinkedInIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-blue-500"/>
          :
          <GitHubIcon sx={{fontSize: 80, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))'}} className="text-black"/>
        }
      </div>
    }</a>
  )
}