'use client'
import { motion } from "motion/react";
import { useEffect } from "react";
import Channel from "./components/channel";
import DarkModeToggle from "./components/darkModeToggle";

import { useNav } from "./utils/navContext";
import { useTheme } from "./utils/themeContext";

const projects = [
  {
    'name': 'Workout Tracker',
    'linkTo': '/projects/workout-tracker',
    'imageSource': '/channelIcons/workout-tracker-2.png',
    'imagePixelated': false,
  },
  {
    'name': 'Music Tracker',
    'linkTo': '/projects/music-tracker',
    'imageSource': '/channelIcons/music-tracker.png',
    'imagePixelated': false,
  },
  {
    'name': 'Script Launcher',
    'linkTo': '/projects/script-launcher',
    'imageSource': '/channelIcons/script-launcher.png',
    'imagePixelated': true,
  },
  {
    'name': 'RSS Feed',
    'linkTo': '/projects/rss-feed',
    'imageSource': '/channelIcons/rss-feed.png',
    'imagePixelated': true,
  },
  {
    'name': 'Text-Based RPG',
    'linkTo': '/projects/text-rpg',
    'imageSource': '/channelIcons/c-sharp-rpg.png',
    'imagePixelated': false,
  },
  {
    'name': '2D Platformer Demo',
    'linkTo': '/projects/2d-platformer',
    'imageSource': '/channelIcons/godot-2d-platformer.png',
    'imagePixelated': true,
  },
]

export default function Home() {
  const { isLight } = useTheme()

  const { setVisibility } = useNav()

  useEffect(() => {
    setVisibility(true)
  }, [setVisibility])

  return (
    <div className='h-full bg-size-[32px] bg-repeat bg-[url(/images/star-pattern.svg)] background-animation rounded-2xl'>
      <div className={`rounded-2xl h-full flex flex-col flex-1 items-center bg-linear-70 ${isLight ? 'from-zinc-300/90 to-zinc-100' : 'from-zinc-900/90 to-zinc-700'} transition-colors duration-500`}>
        <div className="flex flex-col landscape:flex-row lg:flex-row w-full h-fit my-auto portrait:mt-0">
          {/* top bar on small screens */}
          <div className="flex landscape:hidden lg:hidden justify-between p-2 w-dvw">
            <div className="flex aspect-square
            w-28 md:w-32 xl:w-40">
              <Channel name="Elijah" imageSource='/channelIcons/about-me.jpg' linkTo="about-me" pixelated={false} />
            </div>
            <div className="flex aspect-square
            w-28 md:w-32 xl:w-40">
              <DarkModeToggle />
            </div>
          </div>
          {/* left bar on med+ screens */}
          <div className="hidden landscape:flex lg:flex w-fit h-fit px-2">
            <div className="flex aspect-square
            w-28 md:w-32 xl:w-40">
              <Channel name="Elijah" imageSource='/channelIcons/about-me.jpg' linkTo="about-me" pixelated={false} />
            </div>
          </div>

          <motion.main className="w-full p-2 sm:w-[80%] lg:aspect-video sm:mx-auto grid portrait:grid-cols-3 portrait:grid-rows-5 gap-4
          landscape:grid-cols-5 landscape:grid-rows-3 md:gap-4 md:p-8
          lg:gap-8"
          initial={{opacity: 0, y: '-100%'}}
          animate={{opacity: 1, y: 0}}
          transition={{ type: 'spring', bounce: 0.1, damping: 9, mass: 0.5}}>
            {projects.map(c => {
              return (<Channel key={c.name} name={c.name} imageSource={c.imageSource} linkTo={c.linkTo} pixelated={c.imagePixelated} />)
            })}
          </motion.main>
          {/* right bar on med+ screens */}
          <div className="hidden landscape:flex lg:flex w-fit h-fit px-2">
            <div className="flex aspect-square
            w-28 md:w-32 xl:w-40">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
