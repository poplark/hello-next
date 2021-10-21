import { Table } from 'antd';
import Navigator from '../../components/Navigator';
import fetch from 'isomorphic-fetch';

const { Column } = Table;

function TVs(props) {
  console.log('TVs static props ', props);
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
      <Navigator links={[
        { url: '/tvs/initial', label: 'Initial' },
        { url: '/tvs/static', label: 'Static' },
        { url: '/tvs/server', label: 'Server' },
      ]}/>
      <Table rowKey="id" columns={columns} dataSource={data}/>
    </div>
  )
}

export async function getStaticProps(ctx) {
  const resp = await fetch('http://api.tvmaze.com/search/shows?q=wonder woman');
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
