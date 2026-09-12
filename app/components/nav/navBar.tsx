'use client'
import { useTheme } from "@/app/utils/themeContext"

import NavItem from "./navItem"
import MusicToggle from "./musicToggle"
import VolumeUp from './volumeUp'
import VolumeDown from './volumeDown'

import { useNav } from "@/app/utils/navContext"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  {
    name: 'Elijah Gott | LinkedIn',
    linkTo: 'https://www.linkedin.com/in/elijah-gott/',
  },
  {
    name: 'Elijah Gott | GitHub',
    linkTo: 'https://github.com/elijahgott',
  },
]

export default function NavBar(){
  const { isLight } = useTheme()
  const currentPath = usePathname()
  const { isVisible, setVisibility } = useNav()

  const [mouseInside, setMouseInside] = useState(false)

  if( !mouseInside && isVisible && currentPath !== '/' ){
    setTimeout(() => {setVisibility(false)}, 5 * 1000)
  }

  return(
    <div className={`${ isVisible ? 'opacity-100' : 'opacity-0'} z-50 absolute bottom-2 left-[50%] translate-x-[-50%] py-2 md:py-4 px-6 md:px-12 bg-zinc-300/15 backdrop-blur-xs w-full md:w-fit shadow-lg border-2 border-white/40 rounded-full transition-opacity`}
    onMouseEnter={() => {
      setMouseInside(true)
      setVisibility(true)
    }}
    onMouseLeave={() => setMouseInside(false)}>
      { /* inner border */}
      <div className="pointer-events-none absolute inset-0.5 rounded-full border border-white/20" />
      {/* shiny corners */}
      <div className={`pointer-events-none absolute top-1 left-6 bg-radial to-75% h-6 w-6 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
      <div className={`pointer-events-none absolute top-4 left-4 bg-radial to-75% h-4 w-4 rounded-2xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
      <div className={`pointer-events-none absolute bottom-1 right-6 bg-radial to-80% h-6 w-6 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />
      <div className={`pointer-events-none absolute bottom-4 right-4 bg-radial to-80% h-4 w-4 rounded-xl ${ isLight ? 'from-white/80' : 'from-white/30' } transition-colors`} />

      <nav className="flex flex-row space-x-4 items-center justify-center w-full">
        {navItems.map((item, i) => <NavItem key={i} name={item.name} linkTo={item.linkTo} />)}

        <MusicToggle />
        <VolumeDown />
        <VolumeUp />
      </nav>
    </div>
  )
}