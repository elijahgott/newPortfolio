import Link from 'next/link'
import Image from 'next/image'

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
    <div>
      <Link href="/">Home</Link>
      <h1>{project.name}</h1>
      <div className='relative w-48 aspect-square'>
        <Image src={project.image_source} alt={project.name} fill className="rounded-xl object-contain" />
      </div>
      <p>{project.description}</p>
    </div>
  )
}