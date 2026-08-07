'use client'
import { useState } from "react";

import Channel from "./components/channel";
import NavBar from "./components/nav/navBar";

const channels = [
  {
    'name': 'Workout Tracker',
    'image_source': '/cat.jpg',
  },
  {
    'name': 'Music Tracker',
    'image_source': '/cat.jpg',
  },
  {
    'name': 'Script Launcher',
    'image_source': '/cat.jpg',
  },
  {
    'name': 'RSS Feed',
    'image_source': '/cat.jpg',
  },
  {
    'name': 'Snake',
    'image_source': '/cat.jpg',
  },
  {
    'name': 'Todo List',
    'image_source': '/cat.jpg',
  }
]

export default function Home() {
  const [audioUnlocked, setAudioUnlocked] = useState(false)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-linear-70 from-zinc-300 to-white dark:bg-black" onClick={() => setAudioUnlocked(true)}>
      <NavBar audioUnlocked={audioUnlocked} />
      <main className="grid grid-cols-5 grid-rows-3 gap-10 w-full max-w-[75%] h-[90%] flex-col items-center justify-between p-8 sm:items-start border-2">
        {channels.map(c => {
          return (<Channel key={c.name} name={c.name} image_source={c.image_source} audioUnlocked={audioUnlocked} />)
        })}

        <h1>What i want</h1>
        <ul>
          <li>custom icons for all projects</li>
          <li>navbar along bottom - maybe link to my linkedin, github, etc</li>
          <li>account in top left - maybe has about me section with bio and whatnot</li>
          <li>pnpm install use-sound for sound effects?</li>
        </ul>
      </main>
    </div>
  );
}
