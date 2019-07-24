import { Vendors, VendorDetails } from './components';

export default  [
  {
    path: '/',
    component: Vendors
  },
  {
    path: '/details',
    component: VendorDetails,
    props: route => ({ query: route.query })
  }
];
