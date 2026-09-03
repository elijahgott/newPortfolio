'use client'
import { createContext, useContext, useState } from "react"

type NavContextType = {
  isVisible: boolean;
  setVisibility: (par: boolean) => void;
}

const NavContext = createContext<NavContextType | null>(null)

export function NavProvider({children}: {children: React.ReactNode}){
  const [isVisible, setIsVisible] = useState(true)

  const setVisibility = (visibility: boolean) => {
    setIsVisible(visibility)
  }

  return(
    <NavContext.Provider
      value={{
        isVisible,
        setVisibility
      }}
      >
        {children}
      </NavContext.Provider>
  )
}

export function useNav(){
  const context = useContext(NavContext)

  if(!context){
    throw new Error('useNav must be used inside NavProvider')
  }
  return context
}