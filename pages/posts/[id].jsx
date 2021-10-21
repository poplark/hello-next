import { Card } from 'antd';
// import fetch from 'isomorphic-fetch';
import { fetchPosts, fetchPost } from '../../utils/fetch';

function Post(props) {
  console.log('post props ', props);
  const { post } = props;
  return (
    <div>
      <Card title={post.title}>
        {post.content}
      </Card>
    </div>
  )
}

/*
Post.getInitialProps = async function getStaticProps(ctx) {
  const { query } = ctx;
  const resp = await fetch(`http://localhost:3000/api/posts/${query.id}`);
  if (resp.ok) {
    const result = await resp.json();
    return { post: result };
  } else {
    return {
      notFound: true,
    }
  }
}
*/

/*
export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const resp = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  if (!resp.ok) {
    return {
      notFound: true,
    }
  }
  const result = await resp.json();
  return { 
    props: {
      post: result,
    }
  }
}
*/

export async function getStaticProps(ctx) {
  const { params } = ctx;
  // const resp = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const resp = await fetchPost(params.id);
  if (!resp.ok) {
    return {
      notFound: true,
    }
  }
  const result = await resp.json();
  return {
    props: {
      post: result,
    }
  }
}

export async function getStaticPaths() {
  // const resp = await fetch('http://localhost:3000/api/posts');
  const resp = await fetchPosts();
  if (resp.ok) {
    const posts = await resp.json();
    return {
      paths: posts.map((post) => (
        { params: { id: `${post.id}` } }
      )),
      fallback: 'blocking',
    }
  }
  return {
    paths: [
      { params: { id: '1' } }
    ],
    fallback: 'blocking'
  }
}

export default Post;
