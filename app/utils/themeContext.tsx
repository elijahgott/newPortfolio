'use client'
import { createContext, useContext, useState } from "react"

type ThemeContextType = {
  isLight: boolean;
  setIsLight: (par: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({children}: {children: React.ReactNode}){
  const [isLight, setIsLight] = useState(true)

  return(
    <ThemeContext.Provider
      value={{
        isLight,
        setIsLight
      }}
      >
        {children}
      </ThemeContext.Provider>
  )
}

export function useTheme(){
  const context = useContext(ThemeContext)

  if(!context){
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return context
}