import RouteType from '../../types/RouteType'
import {
  Contacts,
  Imprint,
  Inventory,
  Invoices,
  Reports,
  Sales,
  Settings
} from '../../../pages'

const routes: RouteType[] = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts,
    exact: true,
    redirect: '/contacts',
  },
  {
    path: '/point-of-sales',
    name: 'Point of Sales',
    component: Sales,
    exact: true
  },
  {
    path: '/invoices-and-returns',
    name: 'Invoices & returns',
    component: Invoices,
    exact: true
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    exact: true
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: Imprint,
    exact: true
  },
  {
    path: '/Inventory',
    name: 'Inventory',
    component: Inventory,
    exact: true
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: Reports,
    exact: true
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
    exact: true
  }
]

export default routes
