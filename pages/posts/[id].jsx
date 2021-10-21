import { Card } from 'antd';

function Post(props) {
  const { post } = props;
  console.log('sssss ', post);
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

export async function getStaticPaths() {
  const resp = await fetch('http://localhost:3000/api/posts');
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
