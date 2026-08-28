import Bubble from "./bubble"
import Image from "next/image"

interface ProjectButtonProps{
  'type': string,
  'link': string
}

export default function ProjectButton({type, link}: ProjectButtonProps){
  return(
    <Bubble type="button">
      {type == 'play' ?
        (
            <a href={link} target="_blank" className="w-full aspect-square rounded-2xl my-auto bg-linear-to-tl from-green-500 to-lime-400">
              <div className="relative w-full h-full">
                <Image src='/ui/play.png' alt='Visit Project Website' fill sizes='(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw' className="rounded-xl object-contain" style={{'imageRendering': 'pixelated'}} />
              </div>
            </a>
        )
      :
        (
          <a href={link} target="_blank" className="w-full aspect-square rounded-2xl my-auto bg-linear-to-tl from-zinc-300 to-white">
            <div className="relative w-full h-full">
              <Image src='/ui/github.png' alt='Visit Project GitHub Page' fill sizes='(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw' className="rounded-xl object-contain" style={{'imageRendering': 'pixelated'}} />
            </div>
          </a>
        )
      }
    </Bubble>
  )
}