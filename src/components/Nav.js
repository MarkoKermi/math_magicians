// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Outlet } from 'react-router-dom';
import design from './design/Nav.css';

const Nav = () => (
  <>
    <nav className={design.navBar}>
      <h1 className={design.navTitle}>Math Magicians</h1>
      <ul className={design.navLi}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>

        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Nav;
