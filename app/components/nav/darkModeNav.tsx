import { useTheme } from '@/app/utils/themeContext';
import { playSound } from "@/app/utils/soundManager";
import { useAudio } from "@/app/utils/audioContext";

// mui icons
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeNav(){
  const { audioUnlocked } = useAudio()
  const { isLight, setIsLight} = useTheme()
  return (
    <button
    onMouseEnter={() => {
      if(audioUnlocked){
        playSound('hover')
      }
    }}
    onClick={() => {
      if(audioUnlocked){
        playSound('click')
      }
      setIsLight(!isLight)
    }} className={`relative hover:-translate-y-2 hover:scale-105 hover:cursor-pointer active:translate-y-0 active:scale-95 transition-all rounded-full lg:hidden
    before:content-[attr(data-mode)] before:pointer-events-none before:absolute before:z-50 before:w-max before:bg-linear-to-b ${ isLight ? 'before:from-zinc-300/70 before:to-white before:border-white/75' : 'before:text-white before:from-zinc-600/70 before:to-zinc-900 before:border-zinc-600/75'}  before:border-2  before:shadow-lg before:font-semibold before:p-4 before:rounded-full before:top-[-50%] before:right-0 before:-mr-3 before:translate-y-[-50%] before:scale-0 before:opacity-0 before:transition-all before:ease-in
    hover:before:scale-100 hover:before:opacity-100`} data-mode={isLight ? 'Enable Dark Mode' : 'Enable Light Mode'}>
      <div className={`flex flex-col items-center max-w-20 aspect-square overflow-hidden`}>
        <LightModeIcon sx={{fontSize: {xs: 56,sm: 64, md: 72, lg: 80}, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))', transition: 'translate 250ms ease-in-out, opacity 250ms ease-in-out',}} className={`text-amber-400 ${isLight ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} />
        <DarkModeIcon sx={{fontSize: {xs: 56,sm: 64, md: 72, lg: 80}, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))', transition: 'translate 250ms ease-in-out, opacity 250ms ease-in-out',}} className={`text-indigo-600 ${isLight ? 'translate-y-0 opacity-0' : '-translate-y-full opacity-100'}`} />
      </div>
    </button>
  )
}