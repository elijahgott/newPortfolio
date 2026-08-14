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
    'description': 'Track them workouts'
  },
  'music-tracker': {
    'name': 'Music Tracker',
    'image_source': '/images/cat.jpg',
    'description': 'Track them musics'
  },
  'default': {
    'name': 'NOT FOUND',
    'image_source': '/images/cat.jpg',
    'description': 'Project not found.'
  }
}

export default async function ProjectPage({params} : ProjectProps){
  const {projectName} = await params

  let project = projects[projectName as keyof typeof projects]

  if(!project){
    project = projects['default']
  }

  return(
    <div className="flex min-h-full">
        <div className='w-[10%] pl-4 pt-4'>
          <Channel name='back' image_source='/ui/chat.png' linkTo='/' audioUnlocked={true} /> {/* audiounlocked set to true bc idk how else. maybe put audioUnlocked in state? */}
        </div>
        <main className="flex w-[80%] mx-auto flex-col items-center justify-between p-8 sm:items-start">
          <div className='w-full'>
            <Bubble>
              <div className='relative w-48 aspect-square'>
                <Image src={project.image_source} alt={project.name} fill className="select-none rounded-xl object-contain" />
              </div>
              <h1 className='select-none h-fit ml-4 text-5xl text-center text-white font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] line-'>{project.name}</h1>
            </Bubble>
          </div>
          
          <div className='w-full mt-4'>
            <div className='relative w-[50%] aspect-video border float-left'>
              <Image src={project.image_source} alt={project.name} fill className="rounded-xl object-contain" />
            </div>
            <p className='text-xl'>{project.description}</p>
            <p>ADD SECTION FOR SKILLS / TECH USED. probably put in bubble thing like channel</p>
            <p>add scrollbar?</p>
          </div>
        </main>
        <div className='w-[10%]'>
          { /* for spacing */ }
        </div>
    </div>
  )
}