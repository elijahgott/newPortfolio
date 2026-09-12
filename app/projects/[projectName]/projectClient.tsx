'use client'
import { useTheme } from '@/app/utils/themeContext'

import Image from 'next/image'

import Bubble from '@/app/components/bubble'
import ContentContainer from '@/app/components/contentContainer'
import ProjectButton from '@/app/components/projectButton'
import HomeButton from '@/app/components/homeButton'

const projects = {
  'workout-tracker': {
    'name': 'Workout Tracker',
    'playLink': 'https://workouttrackerapp-13vl.onrender.com/',
    'gitHubLink': 'https://github.com/elijahgott/workoutTrackerApp',
    'iconSource': '/channelIcons/workout-tracker-2.png',
    'imageSource': '/projectImages/workout-tracker.jpg',
    'description': 'My Workout Tracker app is a React app used to aid users in tracking their progress in the gym, which will lead to better, more efficient workouts. This is done by tracking each exercise in a workout. After account creation, the user first creates a workout, like "Leg Day", and then adds exercises to that workout, like "Squats". For each exercise in a workout, the user can update the number of sets, reps, and amount of weight they do each time they workout, which will help them to track their progress, and push themselves harder each time they go to the gym.\nShortly after I completed Full Stack Open\'s web development course, I wanted to use what I learned to create a tool that could help me in my (nearly) everyday life. This project was completed over the course of about a month, while mainly working on weekends.\nI have personally used this app to aid with consistently pushing myself in the gym, and I feel that it has helped me to increase my overall strength while also reducing the frequency in which I slack during a workout due to "not feeling it".',
    'skills': ['React', 'JavaScript', 'Styled-Components', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    'notes': []
  },
  'music-tracker': {
    'name': 'Music Tracker',
    'playLink': 'https://musictracker-umnh.onrender.com/',
    'gitHubLink': 'https://github.com/elijahgott/seniordesignproject',
    'iconSource': '/channelIcons/music-tracker.png',
    'imageSource': '/projectImages/music-tracker.jpg',
    'description': 'I created Music Tracker for my Senior Design Project, and it is essentially Letterboxd, but for albums instead of movies. The main objective of this app is to aid in tracking and rating albums you have listened to, as well as tracking albums that you want to listen to. Social interactivity naturally coincides with this objective, which led me to creating an account system, list creation ("Personal Top 10 Albums" list, for example), posts, and more social features.\nIf I was to redo this project now, the main change I\'d make is removing the manual insertion of artists and albums, and replacing it with a web-scraping based approach. With that being said, I feel that the app ended up being good considering my skill level when I started on it (I had no previous experience with React or JavaScript when I began work on the project).\nEarly in 2026, I re-did nearly all of the project, updating the frontend, backend, and completely migrating the database from MySQL to MongoDB. As a result of this, the majority of the app is optimized much better and more performant, however some features that were present in the original version of the app are disabled or not working. In the future, I would love to return to this project and finish my original vision for it, however learning new technologies has taken precedence over updating older projects.',
    'skills': ['React', 'Bootstrap', 'JavaScript', 'Node.js', 'Express', 'MySQL*', 'MongoDB*'],
    'notes': ['*Original project used MySQL for the database,', 'however I switched to MongoDB in 2026.']
  },
  'script-launcher': {
    'name': 'Script Launcher',
    'playLink': 'N/A',
    'gitHubLink': 'https://github.com/elijahgott/scriptLauncher',
    'iconSource': '/channelIcons/script-launcher.png',
    'imageSource': '/projectImages/script-launcher.jpg',
    'description': 'Simple script launcher built using Python and Tkinter. The user selects a script from a pre-defined list of scripts, and can either "Run" the script once, or "Loop" until the user hits "Stop". This app is intended for use in video games, like for AFK farming in Minecraft. In the future, I would like to add the ability to record inputs and save these inputs as a new selectable script.\nThis is the first Python project I\'ve created, and is quite small, but I believe it serves as a great introduction into what is possible with Python.',
    'skills': ['Python', 'TKinter'],
    'notes': []
  },
  'rss-feed': {
    'name': 'RSS Feed',
    'playLink': 'https://rsswebsite.onrender.com/',
    'gitHubLink': 'https://github.com/elijahgott/rssWebsite',
    'iconSource': '/channelIcons/rss-feed.png',
    'imageSource': '/projectImages/rss-feed.jpg',
    'description': 'My RSS Feed is a web app I created to compile news, articles, and videos that I am interested in, rather than me having to search through each individual site. This is the smallest web app I\'ve created so far, because was created solely with myself in mind. I made the choice not to include a database or user authentication, because this app was created for my own use, and not as a platform where anyone can create their own RSS feed. The decision to make this project for myself gave me the freedom to do whatever I wanted for theming, which is why I opted for a slightly retro theme, rather than using a more generic, modern theme.\nI created all of the pixel art myself, which is something that I have really grown to enjoy since first working on my 2D Platformer Demo in Godot.',
    'skills': ['React', 'JavaScript', 'Node.js', 'Express', 'REST API', 'Pixel Art'],
    'notes': []
  },
  'text-rpg': {
    'name': 'Text-Based RPG',
    'playLink': 'N/A',
    'gitHubLink': 'https://github.com/elijahgott/Simple-C-RPG',
    'iconSource': '/channelIcons/c-sharp-rpg.png',
    'imageSource': '/projectImages/c-sharp-rpg.jpg',
    'description': 'This is a simple text-based RPG using C# and Visual Studio\'s UI elements. I followed a tutorial by Scott Lilly for this project, as I had never used C# before and had barely worked on game development prior to this project. This served as a step further into the world of game development and a refresher on Object Oriented programming.\nAs someone who has never played text-based games before, it was interesting to experience how video games were originally played. While text-based games may not be my personal favorite, this tutorial was a great introduction into game programming, and helped me learn and re-learn many OOP and Game Development concepts.',
    'skills': ['C#', 'Visual Studio'],
    'notes': ['Tutorial at https://scottlilly.com/learn-c-by-building-a-simple-rpg-index/']
  },
  '2d-platformer': {
    'name': '2D Platformer Demo',
    'playLink': 'N/A',
    'gitHubLink': 'https://github.com/elijahgott/2DPlatformerDemo',
    'iconSource': '/channelIcons/godot-2d-platformer.png',
    'imageSource': '/projectImages/2d-platformer.jpg',
    'description': 'For my first attempt at game development, I began to learn how to use the Godot game engine to create a Mario-style 2D platformer. Rather than using Godot\'s preferred programming langauge, GDScript, I used this opportunity to improve my C# skills. While this demo began as a "Mario clone," I added other features and abilities that are not present in the 2D Mario games, like a double jump, for example, just for the sake of learning.\nI first began learning pixel art for this game, which I have come to love over time, and have used the skills I learned from this game to create assets for many other projects, including this website\'s original icons.\nDespite enjoying working on this demo, after some time I realized that I was more interested in creating a game engine myself, rather than learning how to use someone else\'s engine, so I began learning how to create a game engine in Java from RyiSnow\'s YouTube series.',
    'skills': ['Godot', 'C#', 'Pixel Art'],
    'notes': []
  },
  'default': {
    'name': 'NOT FOUND',
    'playLink': 'N/A',
    'gitHubLink': 'N/A',
    'iconSource': '/images/cat.jpg',
    'imageSource': '/images/cat.jpg',
    'description': 'Project not found.',
    'skills': ['N/A'],
    'notes': []
  }
}

export default function ProjectClient({projectName}: {projectName: string}){
  const {isLight} = useTheme()

  let project = projects[projectName as keyof typeof projects]
  console.log(projects)

  if(!project){
    project = projects['default']
  }

  return(
      <div className='h-full bg-size-[32px] bg-repeat bg-[url(/images/star-pattern.svg)] background-animation rounded-2xl '>
        <div className={`rounded-2xl flex h-full overflow-hidden bg-linear-70 ${isLight ? 'from-zinc-300/90 to-white' : 'from-zinc-900/90 to-zinc-700'}`}>
    
            <div className='w-[10%] shrink-0 pl-4 pt-4'>
              <HomeButton />
            </div>
    
            <main className="min-h-0 w-[80%] flex-1 overflow-y-auto p-8 pr-[10%]">
    
              <div className='w-full select-none'>
                <Bubble type='title'>
                  <div className='relative w-48 aspect-square'>
                    <Image src={project.iconSource} alt={project.name} style={{'imageRendering': 'pixelated'}} fill className="rounded-xl object-contain" />
                  </div>
                  <h1 className={`h-fit ml-4 text-5xl text-center text-white font-bold ${ isLight ? 'drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]' : 'drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]'} `}>{project.name}</h1>
                </Bubble>
              </div>
              
              <ContentContainer>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='ml-0 mr-auto w-full lg:w-1/2 float-left'>
                    <div className='relative w-full aspect-video'>
                      <Image src={project.imageSource} alt={project.name} fill className="rounded-2xl object-fill shadow-2xl border-2 border-white/30" />
                    </div>

                    <div className='flex justify-center gap-2 mt-2'>
                      <div className="flex w-32 aspect-square">
                        <ProjectButton type='play' link={project.playLink} />
                      </div>
                      
                      <div className="flex w-32 aspect-square">
                        <ProjectButton type='github' link={project.gitHubLink} />
                      </div>
                    </div>
                    
                  </div>
                  
    
                  <div className='w-full lg:w-1/2 ml-auto mr-0 z-40'>

                    {project.description.split('\n').map((paragraph, i) => {
                      return(
                        <p className='m-6 indent-2 text-xl' key={i}>{paragraph}</p>
                      )
                    })}

                    <div className='w-fit max-w-full mx-auto flex select-none'>
                      <Bubble type='text'>
                        <div className='flex my-auto w-full'>
                          <div className='pr-8 [writing-mode:vertical-lr] [text-orientation:upright]'>
                            <h2 className='text-2xl text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]'>SKILLS</h2>
                          </div>
    
                          <div className='w-full font-semibold text-nowrap flex flex-col'>
                            <ul className='my-auto'>
                              {project.skills.map(skill => <li key={skill} className='text-center'>{skill}</li>)}
                            </ul>
                            {project.notes.length != 0 ?
                              (
                                project.notes.map((note, i) => <p key={i} className={`mt-1 text-xs text-wrap text-center ${isLight ? 'text-zinc-600' : 'text-zinc-300'} `}>{note}</p>)
                              )
                              :
                              (
                                null
                              )
                            }
                          </div>
                        </div>
                      </Bubble>
                    </div>
                  </div>
                </div>
                
    
                <div className="w-fit mx-auto mt-4 flex justify-center space-x-4">
                    
    
                </div>
                
              </ContentContainer>
            </main>
        </div>
      </div>
    )
}