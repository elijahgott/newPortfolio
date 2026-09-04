'use client'
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
  },
  {
    'name': 'Music Tracker',
    'linkTo': '/projects/music-tracker',
    'imageSource': '/channelIcons/music-tracker.png',
  },
  {
    'name': 'Script Launcher',
    'linkTo': '/projects/script-launcher',
    'imageSource': '/channelIcons/script-launcher.png',
  },
  {
    'name': 'RSS Feed',
    'linkTo': '/projects/rss-feed',
    'imageSource': '/channelIcons/rss-feed.png',
  },
  {
    'name': 'Text-Based RPG',
    'linkTo': '/projects/text-rpg',
    'imageSource': '/channelIcons/c-sharp-rpg.png',
  },
  {
    'name': '2D Platformer Demo',
    'linkTo': '/projects/2d-platformer',
    'imageSource': '/channelIcons/godot-2d-platformer.png',
  },
]

export default function Home() {
  const { isLight } = useTheme()

  const { setVisibility } = useNav()

  useEffect(() => {
    setVisibility(true)
  }, [setVisibility])

  return (
    <div className={`rounded-2xl h-full flex flex-col flex-1 items-center bg-linear-70 ${isLight ? 'from-zinc-300 to-white' : 'from-zinc-900 to-zinc-700'} transition-colors duration-500`}>
      <div className="flex w-full h-full mb-[5%]">
        <div className="w-[10%] pl-4 pt-4 mt-0 h-full">
          <Channel name="Elijah" imageSource='/channelIcons/about-me.jpg' linkTo="about-me" />
        </div>
        <main className="my-auto grid grid-cols-3 grid-rows-5 gap-6 w-[80%] h-fit pr-[10%] p-4
        md:grid-cols-5 md:grid-rows-3 md:gap-4 md:p-8
        lg:gap-8">
          {projects.map(c => {
            return (<Channel key={c.name} name={c.name} imageSource={c.imageSource} linkTo={c.linkTo} />)
          })}
        </main>
        <div className="w-[10%] pr-4 pt-4 mt-0 h-full">
          <DarkModeToggle />
          <h1 className="mt-8 font-bold text-black">What i want</h1>

          <ul className="list-disc text-black">
            <li>somehow animate background to have items floating around</li>
            <li>add more swag</li>
            <li>especially to about me, that page needs some sauce bad</li>
            <li>add more to project pages, esp description</li>
            <li>make channels more responsive, they break when too small</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
