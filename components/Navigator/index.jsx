import Link from 'next/link';
import { List } from 'antd';

const defaultLinks = [
  { url: '/', label: 'Home' },
  { url: '/posts', label: 'Posts' },
]

function Navigator(props) {
  const { links = defaultLinks } = props;
  return (
    <List>
      {
        links.map((link) => (
          <List.Item key={link.url}>
            <Link href={link.url}>
              {link.label}
            </Link>
          </List.Item>
        ))
      }
    </List>
  )
}

export default Navigator;
