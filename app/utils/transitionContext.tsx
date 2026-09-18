'use client'
import { createContext, useContext, useState } from "react"

type TransitionContextType = {
  transitionDirection: 'left' | 'right'
  setTransitionDirection: (par: 'left' | 'right') => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function TransitionProvider({children}: {children: React.ReactNode}){
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right'>('right')

  return(
    <TransitionContext.Provider
      value={{
        transitionDirection,
        setTransitionDirection
      }}
      >
        {children}
      </TransitionContext.Provider>
  )
}

export function useTransition(){
  const context = useContext(TransitionContext)

  if(!context){
    throw new Error('useTransition must be used inside TransitionProvider')
  }
  return context
}