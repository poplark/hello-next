const posts = [
  {
    id: 1,
    title: 'post 1',
    description: 'post 1 description',
    content: 'This is post 1'
  }, {
    id: 2,
    title: 'post 2',
    description: 'post 2 description',
    content: 'This is post 2'
  }, {
    id: 3,
    title: 'post 3',
    description: 'post 3 description',
    content: 'This is post 3'
  }
]

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((item) => '' + item.id === id);
}
