import { Card } from 'antd';

function Post(props) {
  console.log('post props ', props);
  const { post } = props;
  if (!props.post) {
    return (
      <div>Not Found</div>
    )
  }
  return (
    <div>
      <Card title={post.title}>
        {post.content}
      </Card>
    </div>
  )
}

Post.getInitialProps = async function getStaticProps(ctx) {
  console.log('post ccccc ', ctx)
  const { query } = ctx;
  const resp = await fetch(`http://localhost:3000/api/posts/${query.id}`);
  console.log('post api resp ', resp)
  console.log('post api resp 2222 ', resp.ok, resp.status)
  if (resp.ok) {
    const result = await resp.json();
    return { post: result };
  } else {
    return {
      notFound: true,
    }
  }
}

export default Post;
