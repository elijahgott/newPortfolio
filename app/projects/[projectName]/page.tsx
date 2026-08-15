import Image from 'next/image'

import Channel from '@/app/components/channel'
import Bubble from '@/app/components/bubble'

interface ProjectProps{
  params: Promise<{
    projectName: string;
  }>
}

const projects = {
  'workout-tracker': {
    'name': 'Workout Tracker',
    'image_source': '/images/cat.jpg',
    'description': 'Track them workouts',
    'skills': ['React', 'JavaScript', 'MySQL*', 'Node.js', 'Express', 'MongoDB*', 'Original project used MySQL, however I switched to MongoDB in 2026.']
  },
  'music-tracker': {
    'name': 'Music Tracker',
    'image_source': '/images/cat.jpg',
    'description': 'Track them musics',
    'skills': ['React', 'JavaScript', 'MySQL*', 'Node.js', 'Express', 'MongoDB*', 'Original project used MySQL, however I switched to MongoDB in 2026.']
  },
  'default': {
    'name': 'NOT FOUND',
    'image_source': '/images/cat.jpg',
    'description': 'Project not found.',
    'skills': ['N/A']
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
                <Image src={project.image_source} alt={project.name} fill className="rounded-xl object-contain" />
              </div>
              <h1 className='h-fit ml-4 text-5xl text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] line-'>{project.name}</h1>
            </Bubble>
          </div>
          
          <div className='relative w-full mt-4 p-6 rounded-2xl border-4 border-white
          bg-zinc-500/20 shadow-[0px_24px_2px_-1px_rgba(0,0,0,0.3)]
          dark:bg-gray-900 dark:bg-linear-70 dark:from-gray-900 dark:to-black'>
            { /* gradients along borders */ }
            <div className='w-[10%] h-full pointer-events-none absolute left-0 top-0 rounded-l-lg bg-linear-to-r from-white/60' />
            <div className='w-[10%] h-full pointer-events-none absolute right-0 top-0 rounded-r-lg bg-linear-to-l from-white/60' />
            <div className='w-full h-[10%] pointer-events-none absolute left-0 top-0 rounded-t-lg bg-linear-to-b from-white/60' />
            <div className='w-full h-[10%] pointer-events-none absolute right-0 bottom-0 rounded-b-lg bg-linear-to-t from-white/60' />

            <div className='relative float-left mr-4 my-2 w-[50%] aspect-video rounded-2xl border'>
              <Image src={project.image_source} alt={project.name} fill className="rounded-xl object-contain" />
            </div>

            <div>
              <p className='text-xl'>{project.description}</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus assumenda vero. Alias blanditiis est veritatis quaerat ad. Quos porro adipisci ullam aliquid enim eius sunt deleniti fuga, quis odit.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus assumenda vero. Alias blanditiis est veritatis quaerat ad. Quos porro adipisci ullam aliquid enim eius sunt deleniti fuga, quis odit.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus assumenda vero. Alias blanditiis est veritatis quaerat ad. Quos porro adipisci ullam aliquid enim eius sunt deleniti fuga, quis odit.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus assumenda vero. Alias blanditiis est veritatis quaerat ad. Quos porro adipisci ullam aliquid enim eius sunt deleniti fuga, quis odit.</p>
              <p>ADD SECTION FOR SKILLS / TECH USED. probably put in bubble thing like channel</p>
              <p>add scrollbar?</p>
            </div>

            <div className='w-fit mt-4 mx-auto select-none clear-left'>
              <Bubble type='text'>
                <div className='p-4'>
                  <h2 className='font-bold text-xl text-center'>Skills / Tech Used:</h2>
                  <ul>
                    {project.skills.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              </Bubble>
            </div>
            
          </div>
        </main>
    </div>
  )
}