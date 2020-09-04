import Subnav from '@hashicorp/react-subnav'
import subnavItems from '../../data/subnav'
import { useRouter } from 'next/router'

export default function ConsulSubnav() {
  const router = useRouter()
  return (
    <Subnav
      titleLink={{
        text: 'Sonrai',
        url: '/',
      }}
      ctaLinks={[
        { text: 'GitHub', url: 'https://www.github.com/cwiseman13/docs' }

      ]}
      currentPath={router.pathname}
      menuItemsAlign="center"
      menuItems={subnavItems}
      constrainWidth
    />
  )
}
