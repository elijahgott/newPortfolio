'use client'
import { useEffect } from "react";
import Channel from "./components/channel";

import { useNav } from "./utils/navContext";

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
  const { setVisibility } = useNav()

  useEffect(() => {
    setVisibility(true)
  }, [setVisibility])

  return (
    <div className="h-full flex flex-col flex-1 items-center">
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
        <div className="w-[10%]">
          <h1 className="font-bold text-black dark:text-white">What i want</h1>

          <ul className="list-disc text-black dark:text-white">
            <li>dark / light mode toggle?</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
