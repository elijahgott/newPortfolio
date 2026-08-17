'use client'

import NavItem from "./navItem"
import MusicToggle from "./musicToggle"
import VolumeUp from './volumeUp'
import VolumeDown from './volumeDown'

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
  return(
    <nav className="absolute bottom-0 my-8 py-4 flex flex-row space-x-8 items-center justify-center w-dvw">
      {navItems.map(item => <NavItem key={item.name} name={item.name} linkTo={item.linkTo} imageSource={item.imageSource} />)}
      <MusicToggle />
      <VolumeDown />
      <VolumeUp />
    </nav>
  )
}