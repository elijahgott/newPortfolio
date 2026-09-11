'use client'
import { useTheme } from "../utils/themeContext"

import Image from "next/image"

import Anchor from "../components/Anchor"
import Bubble from "../components/bubble"
import ContentContainer from "../components/contentContainer"
import HomeButton from "../components/homeButton"
import ToggleHidden from "../components/ToggleHidden"

// mui icons
import LocationPinIcon from '@mui/icons-material/LocationPin';

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
                    <Image src="/channelIcons/about-me.jpg" alt="Photo of me (Elijah Gott)" fill sizes="256px" className="rounded-xl object-contain" />
                  </div>
                  <div className="flex flex-col gap-1 h-fit ml-4">
                    <h1 className={`text-5xl text-center text-white font-bold ${ isLight ? 'drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]' : 'drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]'}`} >Elijah Gott</h1>
                    <h2 className={`text-xl font-semibold ${ isLight ? 'text-zinc-600' : 'text-zinc-400 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'}`} >Junior Software Developer</h2>
                  </div>
                  <div className={`absolute top-0 right-0 flex m-5 text-md font-semibold ${ isLight ? 'text-zinc-600' : 'text-zinc-400 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'}`}>
                    <LocationPinIcon />
                    <p>Indianapolis, IN</p>
                  </div>
                </Bubble>
              </div>
              
              <ContentContainer>
                <div className="relative py-8 px-[min(10em,8%)]">
                  { /* professional section (business) */ }
                  <section className="mb-8 flex flex-col">
                    {/* about me section */}
                    <div className="flex flex-col lg:flex-row">
                      <div className="flex flex-col w-full lg:w-1/2">
                        <h2 className='font-bold text-[3rem] mb-4'>About Me</h2>
                        <p className="w-full indent-4 text-xl mr-2 h-fit">In 2020 I enrolled at Purdue for Computer Engineering, and in 2024 I graduated from Purdue with a Bachelor&apos;s Degree in Computer Science. Ever since my enrollment, I have been busy expanding my technical skills and knowledge. Since graduation, I have largely focused my efforts on Full Stack Web Development, having developed multiple full stack web applications, however I also have extensive experience with Database, Application, and Game Development.</p>
                      </div>

                      {/* skills section */}
                      <div className="w-full lg:w-1/2 mt-2">
                        <h3 className="text-[2.5rem] text-center font-bold mb-4">Skills and Tech</h3>
                        <ul className="flex flex-wrap justify-center mx-auto w-[min(90%,600px)]">
                          {skillsAndTech.map((item, i) => {
                            return (
                              <div key={i} className="w-fit m-2 skill-bubble" style={{
                                "--float-x": `${generateRandom(8)}px`,
                                "--float-y": `${generateRandom(8)}px`,
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
                    </div>
                    <ToggleHidden>
                        <div className="float-none md:float-left w-min m-4">
                          <Bubble type="image">
                            <div className='overflow-hidden relative w-64 aspect-square md:mr-4 md:ml-2 mt-4 shadow-lg rounded-xl'>
                              <Image src="/images/about-me/self-image.jpg" alt="Photo of me at college graduation." fill sizes="256px" className="object-cover" />
                            </div>
                            <p className={`mx-4 mt-2 ${isLight ? 'text-zinc-700' : 'text-zinc-200'}`}>The highest quality photo taken of me at graduation.</p>
                          </Bubble>
                        </div>

                        <p className="mt-4 indent-4 text-xl">In 2020, I began my programming journey with Java during my freshman coursework, and moved onto C++ next. After learning the basics of these two languages, as well as HTML and CSS, I began learning React (before learning JavaScript) when I began creating my Senior Project, my <Anchor type="internal" linkTo="/projects/music-tracker">Music Tracker</Anchor> (which I have vastly improved after learning much more about React, Web Design, and Backend Development, and Database Development).</p>
                        <p className="mt-4 indent-4 text-xl">After graduation in 2024, I have focused on expanding my skillset in various ways. I have taken online courses on JavaScript, Python, Full-Stack Development, and more. Most of these courses have been from <Anchor type="external" linkTo="https://www.freecodecamp.org/">FreeCodeCamp</Anchor>, but the JavaScript course was through <Anchor type="external" linkTo="https://wesbos.com/">Wes Bos</Anchor> and the Full-Stack Development course was from <Anchor type="external" linkTo="https://fullstackopen.com/en/">Full Stack Open</Anchor>. After completion of most of the courses I&apos;ve taken, I created a project using the knowledge gained to help solidify and expand my understanding. For example, after completing the Full Stack Open course, I created my <Anchor type="internal" linkTo="/projects/workout-tracker">Workout Tracker</Anchor> using much of what I learned throughout the course.</p>
                      </ToggleHidden>
                    
                  </section>

                  { /* personal section (party) */ }
                  <section className="flex flex-col mt-16 mb-8 text-xl">
                    <div className="flex flex-col-reverse xl:flex-row">

                      { /* image gallery */ }
                      <div className="flex flex-col justify-center w-full lg:w-1/2">
                      <h2 className='cursor-default font-bold text-[3rem] mb-4 text-transparent'>Gallery</h2>
                        <div className="grid grid-cols-2 justify-center-safe w-fit mx-auto gap-4">
                          <div className="grid gap-4 w-64 h-fit my-auto mx-auto">
                            <div className="relative w-full h-48 rounded-xl shadow-lg">
                              <Image src="/images/about-me/gallery/wyoming2.jpeg" alt="Surprise Lake at Grand Teton National Park" fill sizes="256px" className="rounded-xl object-cover" />
                            </div>
                            <div className="relative w-full h-96 rounded-xl shadow-lg">
                              <Image src="/images/about-me/gallery/wyoming3.jpeg" alt="Grand Teton Mountains and Lake" fill sizes="256px" className="rounded-xl object-cover" />
                            </div>
                            <div className="relative w-full h-48 rounded-xl shadow-lg">
                              <Image src="/images/about-me/gallery/wyoming1.jpeg" alt="Grand Teton Mountains" fill sizes="256px" className="rounded-xl object-cover" />
                            </div>
                          </div>

                          <div className="grid gap-4 w-64 h-fit my-auto mx-auto">
                            <div className="relative w-full h-96 rounded-xl shadow-lg">
                              <Image src="/images/about-me/gallery/colorado1.jpeg" alt="Creek on a Colorado mountain." fill sizes="256px" objectFit="cover" className="rounded-xl" />
                            </div>
                            <div className="relative w-full h-48 rounded-xl shadow-lg">
                              <Image src="/images/about-me/gallery/lake1.jpeg" alt="View from the lake." fill objectFit="cover" sizes="256px" className="rounded-xl" />
                            </div>
                            <p className="text-sm px-1 w-full">Some of my favorite places I&apos;ve traveled to are the Grand Teton National Park in Wyoming (left column), and Colorado (right column, top image).</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col w-full lg:w-1/2 ml-auto mr-0 pl-2">
                        <h2 className='font-bold text-[3rem] mb-4'>Personal</h2>
                        <p className="indent-4 mr-4">When I&apos;m not coding, I try to get outside as much as possible. Some of my favorite ways to do this are by working out, biking, and hiking. When I&apos;m feeling artsy, I also like to draw and play piano, although I am not great at either (yet).</p>
                        <p className="indent-4 mt-4 mr-4">I recently visited the Grand Teton National Park in Wyoming, and was blown away by how beautiful it was. Over the few days I was there, I hiked about 30 miles, and gained approximately 5,000 feet in elevation across the different trails.</p>
                        <p className="mt-4">do i just put a bunch of pictures here? and arrange in cool way?</p>
                      </div>
                    </div>
                    

                    <div className="w-fit mx-auto my-8">
                      <h3 className="font-semibold text-2xl -indent-4">Some of my favorite books I&apos;ve read so far:</h3>
                      <ul className="list-disc w-fit mx-auto">
                        <li><i>The Road</i> by Cormac McCarthy</li>
                        <li><i>One Flew Over the Cuckoos Nest</i> by Ken Kesey</li>
                        <li>Lowkey do I put an open book image as the background</li>
                      </ul>
                    </div>
                  </section>
                  
                </div>
              </ContentContainer>
            </main>
        </div>
  )
}