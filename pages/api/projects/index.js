import { projects } from '../../../data'

export default function projectsHandler (req, res) {
  res.status(200).json(projects)
}