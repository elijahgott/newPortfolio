import Image from "next/image"

import Channel from "../components/channel"
import Bubble from "../components/bubble"
import ContentContainer from "../components/contentContainer"

export default function AboutMe(){
  return(
    <div className="flex h-full overflow-hidden">
    
            <div className='w-[10%] shrink-0 pl-4 pt-4'>
              <Channel name='Home' imageSource='/ui/back-arrow.png' linkTo='/' />
            </div>
    
            <main className="min-h-0 w-[80%] flex-1 overflow-y-auto p-8 pr-[10%]">
    
              <div className='w-full select-none'>
                <Bubble type='title'>
                  <div className='relative w-48 aspect-square'>
                    <Image src="/images/cat.jpg" alt="Photo of me (Elijah Gott)" fill className="rounded-xl object-contain" />
                  </div>
                  <h1 className='h-fit ml-4 text-5xl text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] line-'>Elijah Gott</h1>
                </Bubble>
              </div>
              
              <ContentContainer>
                <div className="relative z-10 p-4">
                  <h1 className="font-bold text-3xl text-center">Junior Software Developer</h1>
                  <p className="mt-4 indent-4">I graduated with a Bachelor&apos;s Degree in Computer Science in 2024, which was just the start of my software development journey. While I had some experience with web development back in 7th grade, I didn&apos;t really begin developing software and diving deeper into the world of programming until beginning college, with the introductory Computer Science classes. Since graduating, I have focused on expanding my skillset by learning new languages and technologies through projects, like a text-based RPG made in C#, a workout tracking app that uses MongoDB to store data and Tailwind for the styling, and more.</p>
                </div>
              </ContentContainer>
            </main>
        </div>
  )
}