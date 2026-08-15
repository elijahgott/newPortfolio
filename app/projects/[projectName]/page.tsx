import Image from 'next/image'

import Channel from '@/app/components/channel'
import Bubble from '@/app/components/bubble'
import ContentContainer from '@/app/components/contentContainer'

interface ProjectProps{
  params: Promise<{
    projectName: string;
  }>
}

const projects = {
  'workout-tracker': {
    'name': 'Workout Tracker',
    'iconSource': '/channelIcons/workout-tracker-2.png',
    'imageSource': '/projectImages/workout-tracker.jpg',
    'description': 'My Workout Tracker app is a React app used to aid users in tracking their progress in the gym, which will lead to better, more efficient workouts. This is done by tracking each exercise in a workout. The user first creates a workout, like Leg Day, and then adds exercises to that workout, like Squats, and they can update the sets, reps, and weight they do each time they workout, which will help them to push themselves harder each time.',
    'skills': ['React', 'JavaScript', 'Styled-Components', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    'notes': []
  },
  'music-tracker': {
    'name': 'Music Tracker',
    'iconSource': '/channelIcons/music-tracker.png',
    'imageSource': '/projectImages/music-tracker.jpg',
    'description': 'The main purpose of this project is to aid in tracking and rating albums you have listened to. However, there are plenty of other functions that naturally coincide with this purpose, such as an account system, creating lists (Top 5 Artists, Albums, etc) for each account, adding new albums and artists into the database, and more were needed for the basic functionality of the project.',
    'skills': ['React', 'JavaScript', 'MySQL*', 'Node.js', 'Express', 'MongoDB*'],
    'notes': ['*Original project used MySQL for the database, however I switched to MongoDB in 2026.']
  },
  'script-launcher': {
    'name': 'Script Launcher',
    'iconSource': '/images/cat.jpg',
    'imageSource': '/projectImages/script-launcher.jpg',
    'description': 'Simple script launcher built using Python and Tkinter. The user selects a script from a pre-defined list of scripts, and can either "Run" or "Loop" the selected script. This is the first Python project I\'ve worked on, and is quite small, but I believe it is a great introduction into what is possible with Python.',
    'skills': ['Python'],
    'notes': []
  },
  'rss-feed': {
    'name': 'RSS Feed',
    'iconSource': '/channelIcons/rss-feed.png',
    'imageSource': '/projectImages/rss-feed.jpg',
    'description': 'My RSS feed is the smallest web app I\'ve created so far, because it is intended solely for my use. I decided not to include a database or user authentication, because I wanted this to be simple, and only used for checking news that I am interested in. I focused more on theming than I have in the past, limiting myself to only a few shades of green and creating all the art used throughout the website myself.',
    'skills': ['React', 'JavaScript', 'Node.js', 'Express', 'REST API'],
    'notes': []
  },
  'text-rpg': {
    'name': 'Text-Based RPG',
    'iconSource': '/images/cat.jpg',
    'imageSource': '/projectImages/c-sharp-rpg.jpg',
    'description': 'This is a simple text-based RPG using C# and Visual Studio\'s UI elements. I followed a tutorial by Scott Lilly for this project, as I had never used C# and had barely worked on games prior to this project. This served as a step further into the world of game development and a refresher on Object Oriented programming, both of which I have come to really appreciate lately.',
    'skills': ['C#'],
    'notes': ['Tutorial at https://scottlilly.com/learn-c-by-building-a-simple-rpg-index/']
  },
  '2d-platformer': {
    'name': '2D Platformer Demo',
    'iconSource': '/images/cat.jpg',
    'imageSource': '/projectImages/2d-platformer.jpg',
    'description': 'This is my first time really jumping into game development. This is still a work in progress, but I am using the Godot game engine with C# to make this simple game. I intend on it essentially being a Mario clone, but I have been enjoying adding other features that aren\'t present in the 2D Mario games as a way to experiment and learn. I have also been learning how to do pixel art for this game, and have made all of the assets myself.',
    'skills': ['Godot', 'C#', 'Pixel Art'],
    'notes': []
  },
  'default': {
    'name': 'NOT FOUND',
    'iconSource': '/images/cat.jpg',
    'imageSource': '/images/cat.jpg',
    'description': 'Project not found.',
    'skills': ['N/A'],
    'notes': []
  }
}

export default async function ProjectPage({params} : ProjectProps){
  const {projectName} = await params

  let project = projects[projectName as keyof typeof projects]

  if(!project){
    project = projects['default']
  }

  return(
    <div className="flex h-full overflow-hidden">

        <div className='w-[10%] shrink-0 pl-4 pt-4'>
          <Channel name='Home' imageSource='/ui/back-arrow.png' linkTo='/' />
        </div>

        <main className="min-h-0 w-[80%] flex-1 overflow-y-auto p-8 pr-[10%]">

          <div className='w-full select-none'>
            <Bubble type='title'>
              <div className='relative w-48 aspect-square'>
                <Image src={project.iconSource} alt={project.name} style={{'imageRendering': 'pixelated'}} fill className="rounded-xl object-contain" />
              </div>
              <h1 className='h-fit ml-4 text-5xl text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] line-'>{project.name}</h1>
            </Bubble>
          </div>
          
          <ContentContainer>
            <div className='relative float-left mr-4 my-2 w-[50%] aspect-video'>
              <Image src={project.imageSource} alt={project.name} fill className="rounded-2xl object-fill shadow-2xl border border-white" />
            </div>

            <div className='relative z-10'>
              <p className='m-6 indent-2 text-xl'>{project.description}</p>
            </div>

            <div className='w-fit mt-4 mx-auto select-none clear-left'>
              <Bubble type='text'>
                <div className='p-4'>
                  <h2 className='font-bold text-xl text-center'>Skills / Tech Used:</h2>
                  <ul>
                    {project.skills.map(skill => <li key={skill} className='text-center'>{skill}</li>)}
                  </ul>
                  {project.notes.length != 0 ?
                    (
                      project.notes.map((note, i) => <p key={i} className='mt-4 text-xs'>{note}</p>)
                    )
                    :
                    (
                      null
                    )
                  }
                </div>
              </Bubble>
            </div>
          </ContentContainer>
        </main>
    </div>
  )
}