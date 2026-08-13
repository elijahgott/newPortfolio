'use client'
import { useState } from "react";

import Channel from "./components/channel";
import NavBar from "./components/nav/navBar";

const projects = [
  {
    'name': 'Workout Tracker',
    'linkTo': '/projects/workout-tracker',
    'image_source': '/images/cat.jpg',
    'description': 'used for tracking workouts'
  },
  {
    'name': 'Music Tracker',
    'linkTo': '/projects/music-tracker',
    'image_source': '/images/cat.jpg',
    'description': 'used for tracking music'
  },
  {
    'name': 'Script Launcher',
    'linkTo': '/projects/script-launcher',
    'image_source': '/images/cat.jpg',
    'description': 'used for launching scripts'
  },
  {
    'name': 'RSS Feed',
    'linkTo': '/projects/rss-feed',
    'image_source': '/images/cat.jpg',
    'description': 'rss feed from several sources'
  },
  {
    'name': 'Snake',
    'linkTo': '/projects/snake',
    'image_source': '/images/cat.jpg',
    'description': 'snake eat food'
  },
  {
    'name': 'DOOM',
    'linkTo': '/projects/doom',
    'image_source': '/images/cat.jpg',
    'description': 'MF DOOM!!!!'
  }
]

export default function Home() {
  const [audioUnlocked, setAudioUnlocked] = useState(false)

  return (
    <div className="flex flex-col flex-1 items-center justify-center" onClick={() => setAudioUnlocked(true)}>
      <NavBar audioUnlocked={audioUnlocked} />
      <div className="flex w-full max-w-[1920px]">
        <div className="w-[10%] pl-4">
          <Channel name="Elijah" image_source='/images/cat.jpg' linkTo="about-me" audioUnlocked={audioUnlocked} />
        </div>
        <main className="grid grid-cols-5 grid-rows-3 gap-10 w-[80%] h-[90%] flex-col items-center justify-between p-8 sm:items-start">
          {projects.map(c => {
            return (<Channel key={c.name} name={c.name} image_source={c.image_source} linkTo={c.linkTo} audioUnlocked={audioUnlocked} />)
          })}
        </main>
        <div className="w-[10%]">
          {/* here for spacing */}
          <h1 className="font-bold text-black dark:text-white">What i want</h1>
          <ul className="text-black dark:text-white">
            <li>custom icons for all projects</li>
            <li>navbar along bottom - maybe link to my linkedin, github, etc</li>
            <li>account in top left - maybe has about me section with bio and whatnot</li>
            <li>dark / light mode toggle?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
