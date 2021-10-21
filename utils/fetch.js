import { getPosts, getPostById } from '../store/posts'

async function fetchFactory(fetchData, ...args) {
  const resp = {
    ok: true,
    json: function() {
      return fetchData(...args)
    }
  }
  return resp;
}

export function fetchPosts() {
  return fetchFactory(getPosts);
}

export async function fetchPost(id) {
  return fetchFactory(getPostById, id);
}
