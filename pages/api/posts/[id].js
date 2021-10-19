import { getPostById } from '../../../store/posts'

export default function handler({ query: { id } }, res) {
  const post = getPostById(id);

  // Post with id exists
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: `Post with id: ${id} not found.` });
  }
}
