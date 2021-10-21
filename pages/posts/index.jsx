import Link from 'next/link';
import { useState } from 'react';
import { Table } from 'antd';
// import fetch from 'isomorphic-fetch';
import { fetchPosts } from '../../utils/fetch';

const { Column } = Table;

function Posts(props) {
  console.log('posts props ', props)
  const { posts = [] } = props;
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (text, record, idx) => {
        return (
          <Link href={`/posts/${record.id}`}>
            <a> {text} </a>
          </Link>
        )
      }
    }, {
      title: 'Description',
      dataIndex: 'description',
    }
  ]
  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={posts}/>
    </div>
  )
}

/*
Posts.getInitialProps = async ctx => {
  const resp = await fetch('http://localhost:3000/api/posts');
  const result = await resp.json();
  return { posts: result || [] };
}
*/

export async function getServerSideProps(ctx) {
  // const resp = await fetch('http://localhost:3000/api/posts');
  const resp = await fetchPosts();
  if (!resp.ok) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  const result = await resp.json();
  return {
    props: {
      posts: result || []
    }
  }
}

export default Posts;
