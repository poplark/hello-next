import { Table } from 'antd';
import fetch from 'isomorphic-fetch';

const { Column } = Table;

function TVs(props) {
  console.log('TVs server props ', props);
  let { data = [] } = props;
  data = data.map((item) => ({ ...item, ...item.show}));
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Score',
      dataIndex: 'score',
    }, {
      title: 'Description',
      dataIndex: 'summary',
    }
  ]
  return (
    <div>
      <Table rowKey="id" columns={columns} dataSource={data}/>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const resp = await fetch('http://api.tvmaze.com/search/shows?q=superman');
  if (resp.ok) {
    const data = await resp.json();
    return {
      props: { data }
    }
  }
  return {
    notFound: true
  }
}

export default TVs;
