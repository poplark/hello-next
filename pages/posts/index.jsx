import Link from 'next/link';
import { useState } from 'react';
import { Table } from 'antd';
import fetch from 'isomorphic-fetch';

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

Posts.getInitialProps = async ctx => {
  console.log('ccccc ', ctx)
  const resp = await fetch('http://localhost:3000/api/posts');
  const result = await resp.json();
  console.log('rrrrr ', result)
  return { posts: result || [] };
}

export default Posts;
