'use client'

import NavItem from "./navItem"
import MusicToggle from "./musicToggle"
import VolumeUp from './volumeUp'
import VolumeDown from './volumeDown'

import { useNav } from "@/app/utils/navContext"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: 'Elijah Gott | LinkedIn',
    linkTo: 'https://www.linkedin.com/in/elijah-gott/',
    imageSource: '/ui/linkedin.png'
  },
  {
    name: 'Elijah Gott | GitHub',
    linkTo: 'https://github.com/elijahgott',
    imageSource: '/ui/github.png'
  },
]

export default function NavBar(){
  const currentPath = usePathname()
  const { isVisible, setVisibility } = useNav()

  if( isVisible && currentPath !== '/' ){
    setTimeout(() => {setVisibility(false)}, 5 * 1000)
  }

  return(
    <div className={`${ isVisible ? 'opacity-100' : 'opacity-0'} absolute bottom-2 left-[50%] translate-x-[-50%] py-4 px-12 bg-zinc-300/15 backdrop-blur-md shadow-lg border-2 border-white/40 rounded-full transition-opacity`} onMouseOver={() => setVisibility(true)}>
      { /* inner border */}
      <div className="pointer-events-none absolute inset-0.5 rounded-full border border-white/20" />
      {/* shiny corners */}
      <div className='pointer-events-none absolute top-1 left-6 bg-radial from-white/80 to-transparent to-75% h-6 w-6 rounded-2xl' />
      <div className='pointer-events-none absolute top-4 left-4 bg-radial from-white/80 to-transparent to-75% h-4 w-4 rounded-2xl' />
      <div className='pointer-events-none absolute bottom-1 right-6 bg-radial from-white/80 to-transparent to-80% h-6 w-6 rounded-xl' />
      <div className='pointer-events-none absolute bottom-4 right-4 bg-radial from-white/80 to-transparent to-80% h-4 w-4 rounded-xl' />

      <nav className="flex flex-row space-x-8 items-center justify-center w-fit">
        {navItems.map(item => <NavItem key={item.name} name={item.name} linkTo={item.linkTo} imageSource={item.imageSource} />)}
        <MusicToggle />
        <VolumeDown />
        <VolumeUp />
      </nav>
    </div>
    
  )
}