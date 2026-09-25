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
        <div className="flex w-full h-fit my-auto">
          <div className="absolute top-4 left-4 w-28 md:w-32 aspect-square
          xl:w-40">
            <Channel name="Elijah" imageSource='/channelIcons/about-me.jpg' linkTo="about-me" pixelated={false} />
          </div>
          <motion.main className="w-full sm:w-[80%] lg:aspect-video mx-4 sm:mx-auto mt-8 md:mt-0 grid grid-cols-3 grid-rows-5 gap-4
          lg:grid-cols-5 lg:grid-rows-3 md:gap-4 md:p-8
          lg:gap-8"
          initial={{opacity: 0, y: '-100%'}}
          animate={{opacity: 1, y: 0}}
          transition={{ type: 'spring', bounce: 0.1, damping: 9, mass: 0.5}}>
            {projects.map(c => {
              return (<Channel key={c.name} name={c.name} imageSource={c.imageSource} linkTo={c.linkTo} pixelated={c.imagePixelated} />)
            })}
          </motion.main>
          <div className="absolute top-4 right-4 w-28 md:w-32 aspect-square
          xl:w-40">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
    
  );
}
