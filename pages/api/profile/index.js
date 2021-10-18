import { profile } from '../../../data'

export default function profileHandler (req, res) {
  res.status(200).json(profile)
}