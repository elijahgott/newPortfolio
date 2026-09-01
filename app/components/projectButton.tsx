import Bubble from "./bubble"

import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ProjectButtonProps{
  'type': string,
  'link': string
}

export default function ProjectButton({type, link}: ProjectButtonProps){
  return(
    <Bubble type="button">
      {type == 'play' ?
        (
            <a href={link} target="_blank" className="w-full aspect-square rounded-2xl my-auto bg-linear-to-tl from-green-500/80 to-lime-400/80">
              <div className="relative flex items-center justify-center w-full h-full">
                <PlayArrowIcon sx={{ fontSize: 120, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-white" />
              </div>
            </a>
        )
      :
        (
          <a href={link} target="_blank" className="w-full aspect-square rounded-2xl my-auto bg-linear-to-tl from-violet-600/80 to-fuchsia-400/80">
            <div className="relative flex items-center justify-center w-full h-full">
              <GitHubIcon sx={{ fontSize: 120, filter: 'drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.2))' }} className="text-black" />
            </div>
          </a>
        )
      }
    </Bubble>
  )
}