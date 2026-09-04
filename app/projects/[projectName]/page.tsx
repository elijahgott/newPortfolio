import ProjectClient from './projectClient'

interface ProjectProps{
  params: Promise<{
    projectName: string;
  }>
}

export default async function ProjectPage({params} : ProjectProps){
  const {projectName} = await params

  return (<ProjectClient projectName={projectName}/>)
}