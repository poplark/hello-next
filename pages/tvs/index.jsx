import Navigator from '../../components/Navigator';

function TVs(props) {
  return (
    <>
      <Navigator links={[
        { url: '/tvs/initial', label: 'Initial' },
        { url: '/tvs/static', label: 'Static' },
        { url: '/tvs/server', label: 'Server' },
      ]}/>
    </>
  )
}

export default TVs;
