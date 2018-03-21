import Header from './Header';
import '../styles/styles.scss';

const Layout = props => (
  <div>
    <Header />
    { /* eslint-disable-next-line */ }
    {props.children}
  </div>
);

export default Layout;
