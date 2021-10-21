import { Table } from 'antd';
import fetch from 'isomorphic-fetch';

const { Column } = Table;

function TVs(props) {
  console.log('TVs initial props ', props);
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

TVs.getInitialProps = async ctx => {
  const resp = await fetch('http://api.tvmaze.com/search/shows?q=batman');
  const result = await resp.json();
  return { data: result || [] };
}

export default TVs;
