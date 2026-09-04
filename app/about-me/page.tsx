'use client'
import { useTheme } from "../utils/themeContext"

import Image from "next/image"

import Anchor from "../components/Anchor"
import Bubble from "../components/bubble"
import ContentContainer from "../components/contentContainer"
import HomeButton from "../components/homeButton"
import ToggleHidden from "../components/ToggleHidden"

const skillsAndTech = [
  {
    'name': 'Java'
  },
  {
    'name': 'C++'
  },
  {
    'name': 'JavaScript'
  },
  {
    'name': 'Python'
  },
  {
    'name': 'React'
  },
  {
    'name': 'SQL'
  },
  {
    'name': 'PostgreSQL'
  },
  {
    'name': 'MongoDB'
  },
  {
    'name': 'HTML / CSS'
  },
  {
    'name': 'Git'
  },
]

function generateRandom(n: number){
  return Math.random() * (2 * n) - n
}

function generateDuration(){
  return Math.random() * (10 - 5) + 2
}

export default function AboutMe(){
  const {isLight} = useTheme()

  return(
    <div className={`rounded-2xl flex h-full overflow-hidden  bg-linear-70 ${isLight ? 'from-zinc-300 to-white' : 'from-zinc-900 to-zinc-700'}`}>
            <div className='w-[10%] shrink-0 pl-4 pt-4'>
              <HomeButton />
            </div>
    
            <main className="min-h-0 w-[80%] flex-1 overflow-y-auto p-8 pr-[10%]">
    
              <div className='w-full select-none'>
                <Bubble type='title'>
                  <div className='relative w-48 aspect-square'>
                    <Image src="/channelIcons/about-me.jpg" alt="Photo of me (Elijah Gott)" fill className="rounded-xl object-contain" />
                  </div>
                  <div className="flex flex-col gap-1 h-fit ml-4">
                    <h1 className={`text-5xl text-center text-white font-bold ${ isLight ? 'drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]' : 'drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]'}`} >Elijah Gott</h1>
                    <h2 className={`text-xl font-semibold ${ isLight ? 'text-zinc-600' : 'text-zinc-400 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'}`} >Software Developer</h2>
                  </div>
                </Bubble>
              </div>
              
              <ContentContainer>
                <div className="relative py-8 px-[min(10em,8%)]">
                  { /* professional section (business) */ }
                  <section className="mb-8">
                    <div>
                      <h2 className='mb-4 font-bold text-3xl text-center'>About Me</h2>
                      <p className="mt-4 indent-4 text-xl">I graduated with a Bachelor&apos;s Degree in Computer Science in 2024, and have been working on expanding my knowledge and skills ever since. I have largely focused on Full Stack Web Development, however I also have experience with Game Development, Application Development, and Database Development.</p>
                      {/* hide this inside a "More" button? */}
                      <ToggleHidden>
                        <p className="mt-4 indent-4 text-xl">In 2020, I began my programming journey with Java during my freshman coursework, and moved onto C++ next. After learning the basics of these two languages, as well as HTML and CSS, I began learning React (before learning JavaScript) when I began creating my Senior Project, my <Anchor type="internal" linkTo="/projects/music-tracker">Music Tracker</Anchor> (which I have vastly improved after learning much more about React, Web Design, and Backend Development, and Database Development).</p>
                        <p className="mt-4 indent-4 text-xl">After graduation in 2024, I have focused on expanding my skillset in various ways. I have taken online courses on JavaScript, Python, Full-Stack Development, and more. Most of these courses have been from <Anchor type="external" linkTo="https://www.freecodecamp.org/">FreeCodeCamp</Anchor>, but the JavaScript course was through <Anchor type="external" linkTo="https://wesbos.com/">Wes Bos</Anchor> and the Full-Stack Development course was from <Anchor type="external" linkTo="https://fullstackopen.com/en/">Full Stack Open</Anchor>. After completion of most of the courses I&apos;ve taken, I created a project using the knowledge gained to help solidify and expand my understanding. For example, after completing the Full Stack Open course, I created my <Anchor type="internal" linkTo="/projects/workout-tracker">Workout Tracker</Anchor> using much of what I learned throughout the course.</p>
                      </ToggleHidden>
                      
                    </div>
                    <div className="mt-8 mx-auto w-fit">
                      <h3 className="text-xl text-center font-semibold">Skills and Technologies I&apos;ve learned:</h3>
                        <ul className="flex flex-wrap justify-center mx-auto w-[min(90%,600px)]">
                          {skillsAndTech.map((item, i) => {
                            return (
                              <div key={i} className="w-fit m-2 skill-bubble" style={{
                                "--float-x": `${generateRandom(4)}px`,
                                "--float-y": `${generateRandom(4)}px`,
                                "--float-duration": `${generateDuration()}s`
                                } as React.CSSProperties}>
                                <Bubble type="">
                                  <p className="text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] text-nowrap">{item.name}</p>
                                </Bubble>
                              </div>
                            )
                          }
                          )}
                        </ul>
                    </div>
                  </section>

                  { /* personal section (party) */ }
                  <section className="mb-8">
                    <h2 className="mb-4 font-bold text-3xl text-center">Personal</h2>
                    <div className=" text-xl flow-root">
                      <div className="relative w-64 h-64 sm:mx-auto md:mx-0 md:ml-4 md:float-right">
                        <Image src="/images/cat.jpg" alt="Photo of me doing stuff" fill sizes="256px" className="rounded-xl object-cover" />
                      </div>

                      <div>
                        <p className="indent-4 mr-4">I love to workout, read, play basketball and video games, and go hiking and biking. Recently, I flew (for the first time) to the Grand Teton National Park in Wyoming, and hiked about 30 miles across the 3 days I spent there. I loved every minute of it.</p>

                        <div className="w-fit mx-auto my-8">
                          <h3 className="font-semibold text-2xl -indent-4">Some of my favorite books I&apos;ve read so far:</h3>
                          <ul className="list-disc w-fit mx-auto">
                            <li><i>The Road</i> by Cormac McCarthy</li>
                            <li><i>One Flew Over the Cuckoos Nest</i> by Ken Kesey</li>
                            <li>Lowkey do I put an open book image as the background</li>
                          </ul>
                        </div>
                        
                      </div>
                      
                    </div>

                    <div className="mt-8 mx-auto w-fit">
                          
                        </div>
                    
                  </section>
                  
                </div>
              </ContentContainer>
            </main>
        </div>
  )
}