import { projects } from '../../../data'

export default function projectHandler ({ query: { handle } }, res) {
  const project = projects.filter(pr => pr.handle === handle)

  project.length > 0
    ? res.status(200).json(project[0])
    : res.status(404).json({ message: `The project ${handle} no exist` }) 
}