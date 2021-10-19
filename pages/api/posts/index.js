import { getPosts } from '../../../store/posts'

export default function handler(req, res) {
  res.status(200).json(getPosts())
}
