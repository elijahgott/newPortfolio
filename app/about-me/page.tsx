import Image from "next/image"
import Link from "next/link"

import Channel from "../components/channel"
import Bubble from "../components/bubble"
import ContentContainer from "../components/contentContainer"

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
  return(
    <div className="flex h-full overflow-hidden">
            <div className='w-[10%] shrink-0 pl-4 pt-4'>
              <Channel name='Home' imageSource='/ui/back-arrow.png' linkTo='/' />
            </div>
    
            <main className="min-h-0 w-[80%] flex-1 overflow-y-auto p-8 pr-[10%]">
    
              <div className='w-full select-none'>
                <Bubble type='title'>
                  <div className='relative w-48 aspect-square'>
                    <Image src="/channelIcons/about-me.jpg" alt="Photo of me (Elijah Gott)" fill className="rounded-xl object-contain" />
                  </div>
                  <h1 className='h-fit ml-4 text-5xl text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'>Elijah Gott</h1>
                </Bubble>
              </div>
              
              <ContentContainer>
                <div className="relative py-8 px-[min(10em,8%)]">
                  { /* professional section (business) */ }
                  <section className="mb-8">
                    <div>
                      <h2 className='mb-4 font-bold text-3xl text-center'>Software Developer</h2>
                      <p className="mt-4 indent-4 text-xl">I graduated with a Bachelor&apos;s Degree in Computer Science in 2024, and have been working on expanding my knowledge and skills ever since. I have largely focused on Full Stack Web Development, however I also have experience with Game Development, Application Development, and Database Development.</p>
                      <p className="mt-4 indent-4 text-xl">I began programming with Java in 2020 during my freshman coursework, and moved onto C++ next. After keeping it simple with these two languages, as well as HTML and CSS, I began learning React (before learning JavaScript) when I began creating my Senior Project, my <Link href='/projects/music-tracker' className="font-bold underline hover:text-cyan-500">Music Tracker</Link>, which I have since vastly improved after learning more about React and Web Design.</p>
                      <p className="mt-4 indent-4 text-xl">After graduation in 2024, I have really focused on expanding my skillset in various ways. I have TAKEN COURSES ON JS AND PYTHON AND WHATNOT</p>
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